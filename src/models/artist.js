import mongoose from 'mongoose';
import config from '../config';
import wiki from '../helpers/wiki';
import { slugToName } from '../helpers';
import { getFiles, getFoldersByLetter, getFile } from '../helpers/folders';

const artistSchema = mongoose.Schema({
  name: String,
  slug: String,
  description: String,
  pages: [String],
});

artistSchema.virtual('albums', {
  ref: 'Album',
  localField: '_id',
  foreignField: 'author',
});

artistSchema.virtual('songs', {
  ref: 'Song',
  localField: '_id',
  foreignField: 'author',
});

artistSchema.static('findByLetter', function findByLetter(letter) {
  if (!letter) return this.find();
  return this.find({
    name: {
      $regex: `^${letter}`,
      $options: 'i',
    },
  });
});

artistSchema.static('findSlugByLetter', function findSlugByLetter(letter) {
  if (!letter) return this.find();
  return this.find({
    slug: {
      $regex: `^${letter}`,
      $options: 'i',
    },
  });
});

artistSchema.static('getUnprocessed', function getUnprocessed(letter) {
  return new Promise((resolve) => {
    if (letter === '') return resolve([]);
    const { artistsPages } = config.folders;
    return getFoldersByLetter(artistsPages, letter)
      .then(files => (
        this.findSlugByLetter(letter)
          .then(artists => artists.map(artist => artist.slug))
          .then(artists => files.filter(file => artists.indexOf(file) < 0))
      ))
      .then(resolve);
  });
});

artistSchema.static('slugToName', slug => slugToName(slug));

artistSchema.static('findInWikipedia', ({ name, slug }) => wiki
  .page(name)
  .then(page => ({
    name,
    slug,
    page,
    unprocessed: true,
  }))
  .catch(() => ({
    name,
    slug,
    unprocessed: true,
  }))
  .then((artist) => {
    const {
      page,
      ...props
    } = artist;
    if (!page) return artist;
    return Promise.all([
      // page.info('название'),
      page.summary(),
      page.mainImage(),
      page.info('жанр'),
      page.info('жанры'),
      // page.fullInfo(),
    ])
      .then((
        [
          // title,
          description,
          image,
          genre,
          genres,
          // info,
        ],
      ) => ({
        ...props,
        name: page.raw.title,
        wikiLink: page.raw.fullurl,
        // title,
        description,
        image,
        genre,
        genres,
        // info,
        // raw: page.raw,
        unprocessed: true,
      }));
  }));

artistSchema.static('files', (slug) => {
  const { artistsPages } = config.folders;
  return getFiles(`${artistsPages}/${slug}`)
    .catch(err => {
      console.error('ERROR', err);
      return [];
    });
});

artistSchema.static('file', (slug, filename) => {
  const { artistsPages } = config.folders;
  const fullPath = `${artistsPages}/${slug}/${filename}`;
  // console.log(fullPath);
  /*
  return getFile(fullPath)
    // .then(console.log)
    .catch(err => {
      console.error('ERROR', err);
      return null;
    });
  */
  return getFile(fullPath);
});

artistSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
});

export default mongoose.model('Artist', artistSchema);
