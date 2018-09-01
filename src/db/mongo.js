import mongoose from 'mongoose';

const mongo_url = 'mongodb://mongo/chords';

export const connect = mongoose.connect(mongo_url, { useNewUrlParser: true });

const db = mongoose.connection;

export default db;
