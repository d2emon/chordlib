import axios from 'axios';
import Config from '../config';

const Axios = axios.create({
    baseURL: Config.oldApiURL,
});


export default {
    /*
    fetchAlbums ({ language, artist, special }) {
        const url = special ? `artists/${special}` : `artists/${language}/${letter}`;
        return new Promise((resolve, reject) => {
            Axios.get(url)
                .then(response => resolve(response.data));
        });
    },
    */

    fetchAlbum (slug) {
        return new Promise((resolve, reject) => {
            if (!slug) return resolve({ album: null });
            Axios.get(`album/${slug}`)
                .then(response => {
                    return response;
                })
                .then(response => response.data)
                .then(response => resolve(response.album));
        });
    },

    addAlbum (album) {
        return new Promise((resolve, reject) => {
            Axios.post(`album/`, album)
                .then(response => resolve(response.data));
        });
    },

    updateAlbum (album) {
        return new Promise((resolve, reject) => {
            Axios.put(`album/${album.id}`, album)
                .then(response => resolve(response.data));
        });
    },
}
