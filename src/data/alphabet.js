function list_alphabet(first, last) {
    let letters = [];
    for (let l = first.charCodeAt(0); l < last.charCodeAt(0); l++) {
        letters.push(String.fromCharCode(l));
    }
    return letters;
}

const russian = list_alphabet('А', 'Я');
const english = list_alphabet('A', 'Z');

export const show_language = (language) => {
    let result = {};
    if (language === 'en') {
        result.english = english;
    } else if (language === 'ru') {
        result.russian = russian;
    } else {
        result.russian = russian;
        result.english = english;
    }
    return result;
};