export const fetchArtists = () => ({
    type: 'FETCH_ARTISTS',
});

export const addArtist = (artist) => ({
    type: 'ADD_ARTIST',
    artist,
});
