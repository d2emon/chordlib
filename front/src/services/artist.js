function Artist (name) {
    return {
        name,
        slug: name,
        description: name,
    }
}


const artists = [
    new Artist("Artists 1"),
    new Artist("Artists 2"),
    new Artist("Artists 3"),
    new Artist("Artists 4"),
    new Artist("Artists 5"),
];

export default {
    isFetched: false,
    artists: [],

    fetchArtists () {
        return new Promise((resolve, reject) => {
            if (this.isFetched) return resolve(this.artists);

            this.artists = artists;
            this.isFetched = true;
            return resolve(this.artists);
        });
    },

    addArtist (artist) {
        return new Promise((resolve, reject) => {
            if (!this.isFetched) this.artists = artists;

            this.artists.push(artist);
            this.isFetched = true;
            return resolve(this.artists);
        });
    },
}
