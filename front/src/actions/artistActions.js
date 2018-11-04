import artistService from '../services/artist';

function requestArtists () {
    return {
        type: 'REQUEST_ARTISTS',
    }
}

function receiveArtists ({ artists, letter }) {
    console.log(artists);
    return {
        type: 'RECEIVE_ARTISTS',
        artists,
        letter,
        // posts: json.data.children.map(child => child.data),
        // receivedAt: Date.now()
    }
}

export function invalidateArtists () {
    return {
        type: 'INVALIDATE_ARTISTS',
    }
}

export const fetchArtists = letter => dispatch => {
    dispatch(requestArtists());

    return artistService.fetchArtists({ letter })
        .then(
            response => response.json(),
            error => console.log('An error occurred.', error)
        )
        .then(
            artists => dispatch(receiveArtists(artists))
        )
    };


export const addArtist = (artist) => dispatch => {
    dispatch(requestArtists());

    return artistService.addArtist(artist)
        .then(
            response => response.json(),
            error => console.log('An error occurred.', error)
        )
        .then(
            artists => dispatch(receiveArtists(artists))
        )
};
