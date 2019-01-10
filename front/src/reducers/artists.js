const initialState = {
    letter: '',
    artists: [],
    artist: null,
    wikipedia: null,
    errors: {},
    isLoad: false,

    isFetching: false,
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

        case 'REQUEST_ARTISTS':
            return {
                ...state,
                isFetching: true,
                // [action.letter]: artists(state[action.letter], action)
            };
        case 'RECEIVE_ARTISTS':
            return {
                ...state,
                isFetching: false,
                artists: action.artists,
                title: action.title,
            };
        case 'REQUEST_ARTIST':
            return {
                ...state,
                isFetching: true,
            };
        case 'RECEIVE_ARTIST':
            return {
                ...state,
                isFetching: false,
                artist: action.artist,
            };
        case 'REQUEST_WIKIPEDIA':
            return {
                ...state,
                wikipedia: null,
            };
        case 'RECEIVE_WIKIPEDIA':
            return {
                ...state,
                wikipedia: action.wikipedia,
            };
        case 'VALIDATED_ARTIST':
            return {
                ...state,
                errors: action.errors,
            };
        default:
            return state
    }
}
