function list_alphabet(first, last) {
    let letters = [];
    for (let l = first.charCodeAt(0); l <= last.charCodeAt(0); l++) {
        letters.push(String.fromCharCode(l));
    }
    return letters;
}

const defaultState = {
    russian: list_alphabet('А', 'Я'),
    english: list_alphabet('A', 'Z'),
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_ALPHABET':
            return {
                ...state,
                ...action.alphabets,
            };
        default:
            return state
    }
}
