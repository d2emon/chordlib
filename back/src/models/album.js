import mongoose from 'mongoose';

const albumSchema = mongoose.Schema({
    title: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist'
    },
    slug: String,
    description: String,
});

albumSchema.virtual('songs', {
    ref: 'Song',
    localField: '_id',
    foreignField: 'album',
});

albumSchema.set('toJSON', {
    virtuals: true,
    versionKey:false,
});

export default mongoose.model('Album', albumSchema);

