import albumService from '../services/album';
import slugify from 'slugify';

/*
function requestAlbums () {
    return {
        type: 'REQUEST_ALBUMS',
    }
}

function receiveAlbums ({ albums, title }) {
    return {
        type: 'RECEIVE_ALBUMS',
        albums,
        title,
        // posts: json.data.children.map(child => child.data),
        // receivedAt: Date.now()
    }
}
*/

function requestAlbum () {
    return {
        type: 'REQUEST_ALBUM',
    }
}

function receiveAlbum (album) {
    return {
        type: 'RECEIVE_ALBUM',
        album,
    }
}

function validatedAlbum (errors) {
    return {
        type: 'VALIDATE_ALBUM',
        errors
    }
}

/*
export function invalidateAlbums () {
    return {
        type: 'INVALIDATE_ALBUMS',
    }
}
*/

/*
export const fetchAlbums = query => dispatch => {
    dispatch(requestAlbums());

    return albumService.fetchAlbums(query)
        .then(
            response => response,
            error => console.log('An error occurred.', error)
        )
        .then(
            albums => dispatch(receiveAlbums(albums))
        )
};
*/

export const addAlbum = values => dispatch => {
    return dispatch(validateAlbum(values))
        .then(({ errors }) => {
            if (Object.keys(errors).length > 0) return dispatch(validatedAlbum(errors));
            dispatch(requestAlbum());
            albumService.addAlbum(values)
                .then(
                    response => response,
                    error => console.log('An error occurred.', error)
                )
                .then(
                    album => dispatch(receiveAlbum(album))
                );
        });
};


export const updateAlbum = values => dispatch => {
    if (!values.id) return dispatch(addAlbum(values));
    return dispatch(validateAlbum(values))
        .then(({ errors }) => {
            if (Object.keys(errors).length > 0) return dispatch(validatedAlbum(errors));
            dispatch(requestAlbum());
            albumService.updateAlbum(values)
                .then(
                    response => response,
                    error => console.log('An error occurred.', error)
                )
                .then(
                    album => dispatch(receiveAlbum(album))
                );
        });
};


export const findAlbum = album => dispatch => {
    dispatch(requestAlbum());

    return albumService.fetchAlbum(album)
        .then(
            response => response,
            error => console.log('An error occurred.', error)
        )
        .then(
            response => dispatch(receiveAlbum(response.album))
        )
};


export const validateAlbum = values => dispatch => {
    const { id, title, slug } = values;
    const errors = {};
    if (!title || title.length <= 0) errors.title  = 'Поле не может быть пустым';
    if (!slug || slug.length <= 0) errors.slug  = 'Поле не может быть пустым';
    return dispatch(findAlbum(slug))
        .then(
            response => {
                /*
                const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                 */
                const album = response && response.album;
                if (!id && (album !== null)) errors.slug = 'Введите уникальное значение';
                return dispatch(validatedAlbum(errors));
            }
        )
};

export const getSlug = (name, id) => dispatch => {
    id = id || '';
    const slug = name
        ? slugify(name).toLowerCase() + id
        : '';
    return dispatch(findAlbum(slug))
        .then(response => {
            return response && response.album
                ? dispatch(getSlug(name, id ? id + 1 : 1))
                : slug;
        });
};
