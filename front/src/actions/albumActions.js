import slugify from '../helpers/slugify';
import albumService from '../services/album';

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

// export const getAlbum = album => (dispatch) => {
export const findAlbum = album => (dispatch) => {
  dispatch(requestAlbum());
  return albumService
    .fetchAlbum(album)
    // .then(injectHtml)
    // .then(response => dispatch(receiveArtist(response)))
    .then(response => dispatch(receiveAlbum(response.album)))
    .catch(error => dispatch(receiveError(error)));
};

export const validateAlbum = values => (dispatch) => {
  const { id, title, slug } = values;
  const errors = {};
  if (!title || title.length <= 0) errors.title = 'Поле не может быть пустым';
  if (!slug || slug.length <= 0) errors.slug = 'Поле не может быть пустым';
  // const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return dispatch(findAlbum(slug))
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
    dispatch(requestAlbum());
    return albumService
      .addAlbum(values)
      // .then(response => dispatch(receiveArtists(response.pages)))
      .then(album => dispatch(receiveAlbum(album)))
      .catch(error => dispatch(receiveError(error)));
  });

export const updateAlbum = values => (dispatch) => {
  if (!values.id) return dispatch(addAlbum(values));
  return dispatch(validateAlbum(values))
    .then(({ errors }) => {
      if (Object.keys(errors).length > 0) return dispatch(validatedAlbum(errors));
      dispatch(requestAlbum());
      return albumService
        .updateAlbum(values)
        // .then(response => dispatch(receiveArtists(response.pages)))
        .then(album => dispatch(receiveAlbum(album)))
        .catch(error => dispatch(receiveError(error)));
    });
};

export const getSlug = (name, id) => (dispatch) => {
  const nextId = id ? id + 1 : 1;
  const slug = slugify(name, id);
  return dispatch(findAlbum(slug))
    .then(response => response && response.album)
    .then(response => (response ? dispatch(getSlug(name, nextId)) : slug));
};
