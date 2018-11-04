const baseUrl = '//localhost:4000/artists';
const letter = 'a';

export default {
    fetchArtists () {
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
