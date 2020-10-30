import axios from 'axios';
import Config from '../config';
import markdown from "../helpers/markdown";

const Axios = axios.create({
  baseURL: Config.apiURL,
});

const injectHtml = artist => artist && {
  ...artist,
  html: markdown.render(artist.description || ''),
};

/*
const specialMethods = {
  all: '',
  num: 'num',
  other: 'other',
}
 */

export default {
  fetchArtists: params => Axios
    .get(`artist/`, { params })
    .then(response => response && response.data)
    .then(response => response && response.artists),

  fetchArtist: (slug) => slug
    ? Axios
      .get(`artist/${slug}`)
      .then(response => response && response.data)
      .then(response => response && response.artist)
      .then(injectHtml)
    : Promise.reject(new Error('Empty slug')),

  findInWikipedia: name => Axios
    .get(`artist/wikipedia/${name}`)
    .then(response => response && response.data)
    .then(response => response && response.artist),

  addArtist: artist => Axios
    .post(`artist/`, artist)
    .then(response => response && response.data)
    .then(response => response && response.artist)
    .then(injectHtml),

  updateArtist: artist => Axios
    .put(`artist/${artist.id}`, artist)
    .then(response => response && response.data)
    .then(response => response && response.artist)
    .then(injectHtml),
}
