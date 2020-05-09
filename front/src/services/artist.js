import axios from 'axios';
import Config from '../config';

const Axios = axios.create({
    baseURL: Config.oldApiURL,
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

    findInWikipedia(name) {
        return new Promise((resolve, reject) => {
            Axios.get(`artist/wikipedia/${name}`)
                .then(response => response.data)
                .then(response => resolve(response ? response.artist : null));
        });
    },

    addArtist (artist) {
        return new Promise((resolve, reject) => {
            Axios.post(`artist/`, artist)
                .then(response => resolve(response.data));
        });
    },

    updateArtist (artist) {
        return new Promise((resolve, reject) => {
            Axios.put(`artist/${artist.id}`, artist)
                .then(response => resolve(response.data));
        });
    },
}
