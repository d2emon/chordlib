const initialState = {
    album: null,
    errors: {},
    isLoad: false,

    isFetching: false,
    // didInvalidate: false,
};


export default (state = initialState, action) => {
    switch (action.type) {
        /*
        case 'FETCH_ALBUMS':
            return {
                ...state,
                isLoad: false,
            };
        case 'LOAD_ALBUMS':
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
        */
        case 'REQUEST_ALBUM':
            return {
                ...state,
                isFetching: true,
                // didInvalidate: false,
            };
        case 'RECEIVE_ALBUM':
            return {
                ...state,
                isFetching: false,
                // didInvalidate: false,
                album: action.album,
                // lastUpdated: action.receivedAt
            };
        case 'VALIDATED_ALBUM':
            return {
                ...state,
                errors: action.errors,
            };
        default:
            return state
    }
}
