import axios from 'axios';
import Config from '../config';

const Axios = axios.create({
    baseURL: Config.oldApiURL,
});


export default {
    fetchSong (slug) {
        return new Promise((resolve, reject) => {
            if (!slug) return resolve({ song: null });
            Axios.get(`song/${slug}`)
                .then(response => {
                    return response;
                })
                .then(response => resolve(response.data));
        });
    },

    addSong (song) {
        return new Promise((resolve, reject) => {
            Axios.post(`song/`, song)
                .then(response => resolve(response.data));
        });
    },

    updateSong (song) {
        return new Promise((resolve, reject) => {
            Axios.put(`song/${song.id}`, song)
                .then(response => resolve(response.data));
        });
    },
}
