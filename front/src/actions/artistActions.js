import artistService from '../services/artist';
import slugify from 'slugify';

function requestArtists () {
    return {
        type: 'REQUEST_ARTISTS',
    }
}

function receiveArtists ({ artists, title }) {
    return {
        type: 'RECEIVE_ARTISTS',
        artists,
        title,
        // posts: json.data.children.map(child => child.data),
        // receivedAt: Date.now()
    }
}

function requestArtist () {
    return {
        type: 'REQUEST_ARTIST',
    }
}

function receiveArtist (artist) {
    return {
        type: 'RECEIVE_ARTIST',
        artist,
    }
}

function validatedArtist (errors) {
    return {
        type: 'VALIDATE_ARTIST',
        errors
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


export const addArtist = (values) => dispatch => {
    return dispatch(validateArtist(values))
        .then(({ errors }) => {
            if (Object.keys(errors).length > 0) return dispatch(validatedArtist(errors));
            dispatch(requestArtists());
            artistService.addArtist(values)
                .then(
                    response => response,
                    error => console.log('An error occurred.', error)
                )
                .then(
                    artists => dispatch(receiveArtists(artists))
                );
        });
};


export const findArtist = (artist) => dispatch => {
    dispatch(requestArtist());

    return artistService.fetchArtist(artist)
        .then(
            response => response,
            error => console.log('An error occurred.', error)
        )
        .then(
            response => dispatch(receiveArtist(response.artist))
        )
};


export const validateArtist = ({ name, slug }) => dispatch => {
    const errors = {};
    if (!name || name.length <= 0) errors.name  = 'Field is required';
    if (!slug || slug.length <= 0) errors.slug  = 'Field is required';
    return dispatch(findArtist(slug))
        .then(
            response => {
                /*
                const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                 */
                const artist = response && response.artist;
                if (artist !== null) errors.slug = 'Field must be unique';
                return dispatch(validatedArtist(errors));
            }
        )
};

export const getSlug = (name, id) => dispatch => {
    id = id || '';
    const slug = name
        ? slugify(name).toLowerCase() + id
        : '';
    return dispatch(findArtist(slug))
        .then(response => {
            return response && response.artist
                ? dispatch(getSlug(name, id ? id + 1 : 1))
                : slug;
        });
};
