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

// TODO: Add /v1/*
app.use('/', indexRoutes);
app.use('/users', usersRoutes);
app.use('/artist', artistRoutes);
app.use('/album', albumRoutes);
app.use('/song', songRoutes);

app.use(error404);
app.use(errorHandler(app.get('env')));

export default app;
