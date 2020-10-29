import axios from 'axios';
import Config from '../config';

const Axios = axios.create({
  baseURL: Config.apiURL,
});

export default {
  fetchPages: () => Axios
    .get('pages')
    .then(response => response.data)
    .then(response => response.pages),

  fetchPage: (slug) => (slug
    ? Axios
      .get(`page/${slug}`)
      .then(response => response.data)
      .then(response => (response.page || {}))
    : Promise.resolve({ page: null })),

  fetchArtistPage: (artist, page) => ((artist && page)
    ? Axios
        .get(`artist/${artist}/page`, {
          params: { page },
        })
        // artist/vladimir-vysockij/page?page=ALEXA.TXT
        .then(response => response.data)
        .then(response => (response.page || {}))
    : Promise.resolve({ page: null })),
}
