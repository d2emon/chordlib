import slugify from '../helpers/slugify';
import artistService from '../services/artist';
import markdown from '../helpers/markdown';

const injectHtml = (artist) => {
  if (!artist) return null;
  const { description } = artist;
  if (!description) return artist;
  return {
    ...artist,
    html: markdown.render(description),
  };
};

const requestArtists = () => ({
  type: 'REQUEST_ARTISTS',
});

const receiveArtists = ({ title, artists }) => ({
  type: 'RECEIVE_ARTISTS',
  title,
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
});

const receiveError = error => ({
  type: 'RECEIVE_ERROR',
  error,
});

export const getArtistsList = query => (dispatch) => {
  dispatch(requestArtists());
  return artistService
    .fetchArtists(query)
    // .then(response => dispatch(receiveArtists(response.pages)))
    .then(artists => dispatch(receiveArtists(artists)))
    .catch(error => dispatch(receiveError(error)));
};

export const getArtist = artist => (dispatch) => {
  dispatch(requestArtist());
  return artistService
    .fetchArtist(artist)
    .then(response => response.artist)
    .then(injectHtml)
    .then(response => dispatch(receiveArtist(response)))
    .catch(error => dispatch(receiveError(error)));
};

export const findInWikipedia = artist => (dispatch) => {
  dispatch(requestWikipedia());
  return artistService
    .findInWikipedia(artist)
    .then(response => dispatch(receiveWikipedia(response)))
    .catch(error => dispatch(receiveError(error)));
};

export const validateArtist = values => (dispatch) => {
  const { id, name, slug } = values;
  const errors = {};
  if (!name || name.length <= 0) errors.name = 'Поле не может быть пустым';
  if (!slug || slug.length <= 0) errors.slug = 'Поле не может быть пустым';
  // const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return dispatch(getArtist(slug))
    .then((response) => {
      const artist = response && response.artist;
      const unique = !id && (artist !== null) && (artist.unprocessed);
      if (!unique) errors.slug = 'Введите уникальное значение';
      return dispatch(validatedArtist(errors));
    });
};

export const addArtist = values => dispatch => dispatch(validateArtist(values))
  .then(({ errors }) => {
    if (Object.keys(errors).length > 0) return dispatch(validatedArtist(errors));
    dispatch(requestArtists());
    return artistService
      .addArtist(values)
      // .then(response => dispatch(receiveArtists(response.pages)))
      .then(artists => dispatch(receiveArtists(artists)))
      .catch(error => dispatch(receiveError(error)));
  });

export const updateArtist = values => (dispatch) => {
  if (!values.id) return dispatch(addArtist(values));
  return dispatch(validateArtist(values))
    .then(({ errors }) => {
      if (Object.keys(errors).length > 0) return dispatch(validatedArtist(errors));
      dispatch(requestArtists());
      return artistService
        .updateArtist(values)
        // .then(response => dispatch(receiveArtists(response.pages)))
        .then(artists => dispatch(receiveArtists(artists)))
        .catch(error => dispatch(receiveError(error)));
    });
};

export const getSlug = (name, id) => (dispatch) => {
  const nextId = id ? id + 1 : 1;
  const slug = slugify(name, id);
  return dispatch(getArtist(slug))
    .then(response => response && response.artist && !response.artist.unprocessed)
    .then(response => (response ? dispatch(getSlug(name, nextId)) : slug));
};
