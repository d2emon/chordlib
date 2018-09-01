import mongoose from 'mongoose';

const artistSchema = mongoose.Schema({
    name: String,
    slug: String,
});

export default mongoose.model('Artist', artistSchema);
