import mongoose from 'mongoose';
import config from '../config';

export const connect = mongoose.connect(config.mongo, { useNewUrlParser: true });

const db = mongoose.connection;

export default db;
