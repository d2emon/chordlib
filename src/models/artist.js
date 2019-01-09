import mongoose from 'mongoose';
import fs from 'fs';
import config from '../config';

const artistSchema = mongoose.Schema({
  name: String,
  slug: String,
  description: String,
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
    const { artists } = config.folders;
    return fs.readdir(artists, (err, files) => {
      this.findSlugByLetter(letter)
        .then((processed) => {
          const slugs = processed.map(artist => artist.slug);
          const unprocessed = files
            .filter(file => !file.startsWith('.'))
            .filter(file => slugs.indexOf(file) < 0)
            .filter((file) => {
              try {
                return fs.lstatSync(`${artists}/${file}`).isDirectory();
              } catch (error) {
                console.error(error);
                return file;
              }
            })
            .filter(file => ((letter !== null) ? file.startsWith(letter) : file));
          return resolve(unprocessed);
        });
    });
  });
});

artistSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
});

export default mongoose.model('Artist', artistSchema);
