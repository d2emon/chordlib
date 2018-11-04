import artistService from '../services/artist';

function requestArtists () {
    return {
        type: 'REQUEST_ARTISTS',
    }
}

function receiveArtists ({ artists, title }) {
    console.log(artists);
    return {
        type: 'RECEIVE_ARTISTS',
        artists,
        title,
        // posts: json.data.children.map(child => child.data),
        // receivedAt: Date.now()
    }
}

export function invalidateArtists () {
    return {
        type: 'INVALIDATE_ARTISTS',
    }
}

export const fetchArtists = query => dispatch => {
    dispatch(requestArtists());

    return artistService.fetchArtists(query)
        .then(
            response => response,
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
            response => response,
            error => console.log('An error occurred.', error)
        )
        .then(
            artists => dispatch(receiveArtists(artists))
        )
};
