import axios from 'axios';
import Config from '../config';

const Axios = axios.create({
    baseURL: Config.apiURL,
});


export default {
    fetchArtists ({ letter }) {
        return new Promise((resolve, reject) => {
            Axios.get(`artists/${letter}`)
                .then(artists => resolve(artists.data));
        });
    },

    addArtist (artist) {
        return new Promise((resolve, reject) => {
            Axios.post(`artist/`, artist)
                .then(artists => resolve(artists.data));
        });
    },
}
