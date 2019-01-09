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

artistSchema.static('findByLetter', function (letter) {
    if (!letter) return this.find();
    return this.find({
        name: {
            $regex: '^' + letter,
            $options: 'i',
        },
    });
});

artistSchema.static('findSlugByLetter', function (letter) {
    if (!letter) return this.find();
    return this.find({
        slug: {
            $regex: '^' + letter,
            $options: 'i',
        },
    });
});

artistSchema.static('getUnprocessed', function (letter) {
    return new Promise((response, reject) => {
        if (letter === '') return response([]);
        const { dataFolder } = config;
        fs.readdir(dataFolder, (err, files) => {
            this.findSlugByLetter(letter)
                .then(processed => {
                    const slugs = processed.map(artist => artist.slug);

                    files = files.filter(file => !file.startsWith('.'));
                    files = files.filter(file => slugs.indexOf(file) < 0);
                    try {
                      files = files.filter(file => fs.lstatSync(`${dataFolder}/${file}`).isDirectory());
                    } catch (error) {
                      console.error(error);
                    }
                    const artists = (letter !== null)
                        ? files.filter(file => file.startsWith(letter))
                        : files;
                    response(artists);
                });
        });
    });
});

artistSchema.set('toJSON', {
    virtuals: true,
    versionKey:false,
});

export default mongoose.model('Artist', artistSchema);
