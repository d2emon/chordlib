import mongoose from 'mongoose';
import fs from 'fs';

const artistSchema = mongoose.Schema({
    name: String,
    slug: String,
});

artistSchema.statics.getUnprocessed = (letter) => new Promise((response, reject) => {
    const dataFolder ='./public-data';
    fs.readdir(dataFolder, (err, files) => {
        const artists = files
            .filter(file => file.startsWith(letter));
        /*
            .map(file => {
                // console.log(file, file.startsWith);

                console.log(file, file.startsWith(letter));
            });
         */
        response(artists);
    });
});

artistSchema.set('toJSON', {
    virtuals: true,
    versionKey:false,
});

export default mongoose.model('Artist', artistSchema);
