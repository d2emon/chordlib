const defaultState = {
    alphabets: {
        en: {
            A: 'a',
            B: 'b',
            C: 'c',
            D: 'd',
            E: 'e',
            F: 'f',
            G: 'g',
            H: 'h',
            I: 'i',
            J: 'j',

            K: 'k',
            L: 'l',
            M: 'm',
            N: 'n',
            O: 'o',
            P: 'p',
            Q: 'q',
            R: 'r',
            S: 's',
            T: 't',

            U: 'u',
            V: 'v',
            W: 'w',
            X: 'x',
            Y: 'y',
            Z: 'z',
        },
        ru: {
            'А': 'a',
            'Б': 'b',
            'В': 'v',
            'Г': 'g',
            'Д': 'd',
            'Е': 'ye',
            'Ё': 'yo',
            'Ж': 'zh',
            'З': 'z',
            'И': 'i',

            'Й': 'j',
            'К': 'k',
            'Л': 'l',
            'М': 'm',
            'Н': 'n',
            'О': 'o',
            'П': 'p',
            'Р': 'r',
            'С': 's',
            'Т': 't',

            'У': 'u',
            'Ф': 'f',
            'Х': 'h',
            'Ц': 'c',
            'Ч': 'ch',
            'Ш': 'sh',
            'Щ': 'sch',
            // 'Ъ': '-',
            'Ы': 'y',
            // 'Ь': '--',

            'Э': 'e',
            'Ю': 'yu',
            'Я': 'ya',
        },
    },
    additionalLinks: [
        { text: 'Разные песни', href: '/artists/other' },
        { text: '#', href: '/artists/num' },
        { text: 'Все', href: '/artists/all' },
        { text: 'Добавить исполнителя', href: '/add-artist' },
    ]
};

/*
function list_alphabet(first, last) {
    let letters = [];
    for (let l = first.charCodeAt(0); l <= last.charCodeAt(0); l++) {
        letters.push(String.fromCharCode(l));
    }
    return letters;
}

list_alphabet('А', 'Я'),
list_alphabet('A', 'Z'),
*/

/*
export default (state = defaultState, action) => {
    switch (action.type) {
        case 'FETCH_ALPHABET':
            return {
                ...state,
                ...defaultState,
            };
        default:
            return state
    }
}
*/
export default (state = defaultState) => state;
