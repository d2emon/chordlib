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

const specialMethods = {
  all: 'artists',
  num: 'artists/num',
  other: 'artists/other',
}

export default {
  fetchArtists: special => Axios
    .get(specialMethods[special] || 'artists')
    .then(response => response && response.data)
    .then(response => response && response.artists)
    .then(response => {
      console.log(response);
      return response;
    }),

  fetchArtistsByLetter: ({ language, letter }) => Axios
    .get(`artists/${language}/${letter}`)
    .then(response => response && response.data)
    .then(response => response && response.artists),

  fetchArtist: (slug) => slug && Axios
    .get(`artist/${slug}`)
    .then(response => response && response.data)
    .then(response => response && response.artist)
    .then(injectHtml),

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
