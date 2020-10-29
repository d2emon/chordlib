// import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'; // Deprecated
import cors from 'cors'; // Deprecated
import express from 'express';
import path from 'path';
import logger from 'morgan';
import {
  error404,
  errorHandler,
} from './handlers/error';

import db from './db/mongo';
import debug from './helpers/debug';

import indexRoutes from './routes/index';
import usersRoutes from './routes/users';
import artistRoutes from './routes/artist';
import albumRoutes from './routes/album';
import songRoutes from './routes/song';

const app = express();

const publicPath = path.join(__dirname, '..', 'public');

app.use(logger('dev'));
app.use(cors()); // ?
app.use(express.json()); // ?
app.use(express.urlencoded({ extended: false })); // ?
app.use(cookieParser()); // ?
app.use(express.static(publicPath));

db.on('error', error => debug('db')(error || ''));
db.once('open', () => debug('db')('MongoDB connected'));

app.use('/api/v1.0/', indexRoutes);
app.use('/api/v1.0/user', usersRoutes);
app.use('/api/v1.0/artist', artistRoutes);
app.use('/api/v1.0/album', albumRoutes);
app.use('/api/v1.0/song', songRoutes);

app.use(error404);
app.use(errorHandler(app.get('env')));

export default app;
