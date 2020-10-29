import mongoose from 'mongoose';

const songSchema = mongoose.Schema({
  title: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artist',
  },
  album: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artist',
  },
  slug: String,
  text: String,
});

songSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
});

export default mongoose.model('Song', songSchema);
