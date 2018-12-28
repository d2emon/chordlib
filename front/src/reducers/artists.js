const initialState = {
    letter: '',
    artists: [],
    artist: null,
    validate: {},
    isLoad: false,

    isFetching: false,
    didInvalidate: false,
};


export default (state = initialState, action) => {
    switch (action.type) {
        /*
        case 'SELECT_ARTIST':
            return action.artist;
        */
        case 'FETCH_ARTISTS':
            return {
                ...state,
                isLoad: false,
            };
        case 'LOAD_ARTISTS':
            return {
                ...state,
                artists: action.artists,
                isLoad: true,
            };

        case 'INVALIDATE_ARTISTS':
            return {
                ...state,
                didInvalidate: true,
            };
        case 'REQUEST_ARTISTS':
            return {
                ...state,
                isFetching: true,
                didInvalidate: false,
                // [action.letter]: artists(state[action.letter], action)
            };
        case 'RECEIVE_ARTISTS':
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                artists: action.artists,
                title: action.title,
                lastUpdated: action.receivedAt
            };
        case 'REQUEST_ARTIST':
            return {
                ...state,
                isFetching: true,
                didInvalidate: false,
                // [action.letter]: artists(state[action.letter], action)
            };
        case 'RECEIVE_ARTIST':
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                artist: action.artist,
                lastUpdated: action.receivedAt
            };
        case 'VALIDATED_ARTIST':
            return {
                ...state,
                validate: action.validate,
            };
        default:
            return state
    }
}
