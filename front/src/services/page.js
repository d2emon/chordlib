import axios from 'axios';
import Config from '../config';

const Axios = axios.create({
  baseURL: Config.apiURL,
});


export default {
  fetchPages() {
    return new Promise((resolve) => {
      Axios
        .get('pages')
        .then(response => resolve(response.data));
    });
  },

  fetchPage(slug) {
    return new Promise((resolve) => {
      if (!slug) return resolve({ page: null });
      Axios
        .get(`page/${slug}`)
        .then(response => resolve(response.data));
    });
  },
}
