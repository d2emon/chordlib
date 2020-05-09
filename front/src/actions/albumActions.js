import slugify from '../helpers/slugify';
import albumService from '../services/album';
import apiAction from './apiAction';

const requestAlbum = () => ({
  type: 'REQUEST_ALBUM',
});

const receiveAlbum = album => ({
  type: 'RECEIVE_ALBUM',
  album,
});

const validatedAlbum = errors => ({
  type: 'VALIDATED_ALBUM',
  errors,
});

const receiveError = error => ({
  type: 'RECEIVE_ERROR',
  error,
});

export const getAlbum = album => apiAction(
  () => albumService.fetchAlbum(album),
  requestAlbum,
  receiveAlbum,
  receiveError,
);

export const validateAlbum = values => (dispatch) => {
  const { id, title, slug } = values;
  const errors = {};
  if (!title || title.length <= 0) errors.title = 'Поле не может быть пустым';
  if (!slug || slug.length <= 0) errors.slug = 'Поле не может быть пустым';
  // const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return dispatch(getAlbum(slug))
    .then((response) => {
      const album = response && response.album;
      const unique = id ? (album.id === id) : (!album);
      if (!unique) errors.slug = 'Введите уникальное значение';
      return dispatch(validatedAlbum(errors));
    });
};

export const addAlbum = values => dispatch => dispatch(validateAlbum(values))
  .then(({ errors }) => {
    if (Object.keys(errors).length > 0) return dispatch(validatedAlbum(errors));
    return apiAction(
      () => albumService.addAlbum(values),
      requestAlbum,
      receiveAlbum,
      receiveError,
    );
  });

export const updateAlbum = values => (dispatch) => {
  if (!values.id) return dispatch(addAlbum(values));
  return dispatch(validateAlbum(values))
    .then(({ errors }) => {
      if (Object.keys(errors).length > 0) return dispatch(validatedAlbum(errors));
      return apiAction(
        () => albumService.updateAlbum(values),
        requestAlbum,
        receiveAlbum,
        receiveError,
      );
    });
};

export const getSlug = (name, id) => (dispatch) => {
  const nextId = id ? id + 1 : 1;
  const slug = slugify(name, id);
  return dispatch(getAlbum(slug))
    .then(response => response && response.album)
    .then(response => (response ? dispatch(getSlug(name, nextId)) : slug));
};
