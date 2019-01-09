import axios from 'axios';
import Config from '../config';

const Axios = axios.create({
  baseURL: Config.apiURL,
});

export default {
  fetchPages() {
    return new Promise((resolve, reject) => (
      Axios
        .get('pages')
        .then(response => response.data)
        // .then(response => (response.page ? response.page : {}))
        .then(response => resolve(response))
        .catch(error => reject(error))
    ));
  },

  fetchPage(slug) {
    return new Promise((resolve, reject) => {
      if (!slug) return resolve({ page: null });
      return Axios
        .get(`page/${slug}`)
        .then(response => response.data)
        .then(response => (response.page ? response.page : {}))
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  },
}
