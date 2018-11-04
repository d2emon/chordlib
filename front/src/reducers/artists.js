const artists = [
    "Artists 1",
    "Artists 2",
    "Artists 3",
    "Artists 4",
    "Artists 5",
];

export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_ARTISTS':
            return artists;
        case 'ADD_ARTIST':
            state.push(action.artist);
            return state;
        default:
            return state
    }
}
