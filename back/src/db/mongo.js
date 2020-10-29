import mongoose from 'mongoose';

export const connect = mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

const db = mongoose.connection;

export default db;
