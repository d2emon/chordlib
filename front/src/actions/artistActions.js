import slugify from '../helpers/slugify';
import artistService from '../services/artist';
import apiAction from './apiAction';

const requestArtists = () => ({
  type: 'REQUEST_ARTISTS',
});

const receiveArtists = artists => ({
  type: 'RECEIVE_ARTISTS',
  artists,
});

const requestArtist = () => ({
  type: 'REQUEST_ARTIST',
});

const receiveArtist = artist => ({
  type: 'RECEIVE_ARTIST',
  artist,
});

const requestWikipedia = () => ({
  type: 'REQUEST_WIKIPEDIA',
});

const receiveWikipedia = wikipedia => ({
  type: 'RECEIVE_WIKIPEDIA',
  wikipedia,
});

const validatedArtist = errors => ({
  type: 'VALIDATED_ARTIST',
  errors,
  success: (Object.keys(errors).length > 0),
});

const receiveError = error => ({
  type: 'RECEIVE_ERROR',
  error,
});

export const getArtistsList = special => apiAction(
  () => artistService.fetchArtists(special),
  requestArtists,
  receiveArtists,
  receiveError,
);

export const getArtistsByLetter = query => apiAction(
  () => artistService.fetchArtistsByLetter(query),
  requestArtists,
  receiveArtists,
  receiveError,
);

export const getArtist = artist => apiAction(
  () => artistService.fetchArtist(artist),
  requestArtist,
  receiveArtist,
  receiveError,
);

export const findInWikipedia = artist => apiAction(
  () => artistService.findInWikipedia(artist),
  requestWikipedia,
  receiveWikipedia,
  receiveError,
);

export const validateArtist = values => (dispatch) => {
  const { id, name, slug } = values;
  const errors = {};
  if (!name || name.length <= 0) errors.name = 'Поле не может быть пустым';
  if (!slug || slug.length <= 0) errors.slug = 'Поле не может быть пустым';
  // const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return artistService
    .fetchArtist(slug)
    .then((artist) => {
      if (!id && artist && !artist.unprocessed) errors.slug = 'Введите уникальное значение';
      return errors;
    })
    .then(result => dispatch(validatedArtist(result)));
};

export const addArtist = values => dispatch => dispatch(validateArtist(values))
  .then(({ sucess }) => sucess && apiAction(
    () => artistService.addArtist(values),
    requestArtists,
    receiveArtists,
    receiveError,
  )(dispatch));

export const updateArtist = values => (dispatch) => {
  if (!values.id) return dispatch(addArtist(values));
  return dispatch(validateArtist(values))
    .then(({ sucess }) => sucess && apiAction(
      () => artistService.updateArtist(values),
      requestArtists,
      receiveArtists,
      receiveError,
    )(dispatch));
};

export const getSlug = (name, id) => (dispatch) => {
  const nextId = id ? id + 1 : 1;
  const slug = slugify(name, id);
  return dispatch(getArtist(slug))
    .then(artist => artist && !artist.unprocessed)
    .then(artist => (artist ? dispatch(getSlug(name, nextId)) : slug));
};
