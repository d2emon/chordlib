const baseUrl = '//localhost:4000/artists';

export default {
    fetchArtists ({ letter }) {
        return new Promise((resolve, reject) => {
            fetch(`${baseUrl}/${letter}`)
                .then(artists => resolve(artists));
        });
    },

    addArtist (artist) {
        return new Promise((resolve, reject) => {
            /*
            if (!this.isFetched) this.artists = artists;

            this.artists.push(artist);
            this.isFetched = true;
            */
            return resolve([]);
        });
    },
}
