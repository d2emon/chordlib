import mongoose from 'mongoose';
import {
  getFiles,
  getFoldersByLetter,
  getFile,
} from '../helpers/folders';
import slugToName from '../helpers/slug_to_name';
import wiki from '../helpers/wiki';

const artistsPages = process.env['FOLDERS.ARTIST_PAGES'];

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
  return letter
    ? this.find({
      name: {
        $regex: `^${letter}`,
        $options: 'i',
      },
    })
    : this.find();
});

artistSchema.static('findSlugByLetter', function findSlugByLetter(letter) {
  return letter
    ? this.find({
      slug: {
        $regex: `^${letter}`,
        $options: 'i',
      },
    })
    : this.find();
});

artistSchema.static('getUnprocessed', async function getUnprocessed(letter) {
  if (letter === '') return [];

  const files = await getFoldersByLetter(artistsPages, letter);
  const artists = await this.findSlugByLetter(letter);
  const slugs = artists.map(artist => artist.slug);
  return files
    .filter(file => (slugs.indexOf(file) < 0))
    .map(slug => ({
      name: slugToName(slug),
      slug,
      unprocessed: true,
    }));
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

artistSchema.static('files', slug => getFiles(`${artistsPages}/${slug}`));

artistSchema.static('file', (slug, filename) => getFile(`${artistsPages}/${slug}/${filename}`));

artistSchema.static('descriptionFile', function descriptionFile(slug) {
  return this.file(slug, 'about.md');
});

artistSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
});

export default mongoose.model('Artist', artistSchema);
