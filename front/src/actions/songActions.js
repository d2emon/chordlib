import songService from '../services/song';
import slugify from 'slugify';

function requestSong () {
    return {
        type: 'REQUEST_SONG',
    }
}

function receiveSong (song) {
    return {
        type: 'RECEIVE_SONG',
        song,
    }
}

function validatedSong (errors) {
    return {
        type: 'VALIDATE_SONG',
        errors
    }
}

export const addSong = values => dispatch => {
    return dispatch(validateSong(values))
        .then(({ errors }) => {
            if (Object.keys(errors).length > 0) return dispatch(validatedSong(errors));
            dispatch(requestSong());
            songService.addSong(values)
                .then(
                    response => response,
                    error => console.log('An error occurred.', error)
                )
                .then(
                    song => dispatch(receiveSong(song))
                );
        });
};


export const updateSong = values => dispatch => {
    if (!values.id) return dispatch(addSong(values));
    return dispatch(validateSong(values))
        .then(({ errors }) => {
            if (Object.keys(errors).length > 0) return dispatch(validatedSong(errors));
            dispatch(requestSong());
            songService.updateSong(values)
                .then(
                    response => response,
                    error => console.log('An error occurred.', error)
                )
                .then(
                    song => dispatch(receiveSong(song))
                );
        });
};


export const findSong = song => dispatch => {
    dispatch(requestSong());

    return songService.fetchSong(song)
        .then(
            response => response,
            error => console.log('An error occurred.', error)
        )
        .then(
            response => dispatch(receiveSong(response.song))
        )
};


export const validateSong = values => dispatch => {
    const { id, title, slug } = values;
    const errors = {};
    if (!title || title.length <= 0) errors.title  = 'Поле не может быть пустым';
    if (!slug || slug.length <= 0) errors.slug  = 'Поле не может быть пустым';
    return dispatch(findSong(slug))
        .then(
            response => {
                /*
                const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                 */
                const song = response && response.song;
                const unique = id
                    ? (song.id === id)
                    : (!song);
                if (!unique) errors.slug = 'Введите уникальное значение';
                return dispatch(validatedSong(errors));
            }
        )
};

export const getSlug = (name, id) => dispatch => {
    id = id || '';
    const slug = name
        ? slugify(name).toLowerCase() + id
        : '';
    return dispatch(findSong(slug))
        .then(response => {
            return response && response.song
                ? dispatch(getSlug(name, id ? id + 1 : 1))
                : slug;
        });
};
