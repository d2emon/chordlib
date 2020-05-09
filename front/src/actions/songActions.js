import slugify from '../helpers/slugify';
import songService from '../services/song';
import apiAction from './apiAction';

const requestSong = () => ({
  type: 'REQUEST_SONG',
});

const receiveSong = song => ({
  type: 'RECEIVE_SONG',
  song,
});

const validatedSong = errors => ({
  type: 'VALIDATED_SONG',
  errors,
});

const receiveError = error => ({
  type: 'RECEIVE_ERROR',
  error,
});

export const getSong = song => apiAction(
  () => songService.fetchSong(song),
  requestSong,
  receiveSong,
  receiveError,
);

export const validateSong = values => (dispatch) => {
  const { id, title, slug } = values;
  const errors = {};
  if (!title || title.length <= 0) errors.title = 'Поле не может быть пустым';
  if (!slug || slug.length <= 0) errors.slug = 'Поле не может быть пустым';
  // const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return dispatch(getSong(slug))
    .then((response) => {
      const song = response && response.song;
      const unique = id ? (song.id === id) : (!song);
      if (!unique) errors.slug = 'Введите уникальное значение';
      return dispatch(validatedSong(errors));
    });
};

export const addSong = values => dispatch => dispatch(validateSong(values))
  .then(({ errors }) => {
    if (Object.keys(errors).length > 0) return dispatch(validatedSong(errors));
    return apiAction(
      () => songService.addSong(values),
      requestSong,
      receiveSong,
      receiveError,
    );
  });

export const updateSong = values => (dispatch) => {
  if (!values.id) return dispatch(addSong(values));
  return dispatch(validateSong(values))
    .then(({ errors }) => {
      if (Object.keys(errors).length > 0) return dispatch(validatedSong(errors));
      return apiAction(
        () => songService.updateSong(values),
        requestSong,
        receiveSong,
        receiveError,
      );
    });
};

export const getSlug = (name, id) => (dispatch) => {
  const nextId = id ? id + 1 : 1;
  const slug = slugify(name, id);
  return dispatch(getSong(slug))
    .then(response => response && response.song)
    .then(response => (response ? dispatch(getSlug(name, nextId)) : slug));
};
