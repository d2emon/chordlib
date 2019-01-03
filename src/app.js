import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'

import indexRouter from './routes/index'
import usersRouter from './routes/users'
import artistRouter from './routes/artist'
import albumRouter from './routes/album'

import db from './db/mongo';

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('MongoDB connected');
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/artist', artistRouter);
app.use('/album', albumRouter);

export default app
