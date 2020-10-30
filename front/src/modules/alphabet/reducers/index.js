const languages = {
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
}

const mapLetters = (language, letters) => Object.keys(letters)
    .map((text) => ({
        text,
        href: `/artists/${text}`,
    }));

const defaultState = {
    alphabets: Object.keys(languages)
        .reduce(
            (result, language) => ({
                ...result,
                [language]: mapLetters(language, languages[language]),
            }),
            {}
        ),
    specials: [
        { text: 'Разные песни', href: '/artists/other' },
        { text: '#', href: '/artists/0' },
        { text: 'Все', href: '/artists/all' },
        { text: 'Добавить исполнителя', href: '/add-artist' },
    ]
};

export default (state = defaultState) => state;
