import axios from 'axios';
import Config from '../config';

const Axios = axios.create({
    baseURL: Config.apiURL,
});


export default {
    fetchArtists ({ language, letter, special }) {
        const url = special ? `artists/${special}` : `artists/${language}/${letter}`;
        return new Promise((resolve, reject) => {
            Axios.get(url)
                .then(response => resolve(response.data));
        });
    },

    fetchArtist (slug) {
        return new Promise((resolve, reject) => {
            if (!slug) return resolve({ artist: null });
            Axios.get(`artist/${slug}`)
                .then(response => {
                    return response;
                })
                .then(response => resolve(response.data));
        });
    },

    addArtist (artist) {
        return new Promise((resolve, reject) => {
            Axios.post(`artist/`, artist)
                .then(response => resolve(response.data));
        });
    },
}
