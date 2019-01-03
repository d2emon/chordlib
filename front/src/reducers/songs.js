const initialState = {
    song: null,
    errors: {},
    isLoad: false,

    isFetching: false,
};


export default (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_SONG':
            return {
                ...state,
                isFetching: true,
            };
        case 'RECEIVE_SONG':
            return {
                ...state,
                isFetching: false,
                song: action.song,
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
