import mongoose from 'mongoose';

const albumSchema = mongoose.Schema({
    title: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist'
    },
    slug: String,
});

export default mongoose.model('Album', albumSchema);

