import languages from './letters';

const specials = {
  other: 'Разные песни',
  0: '0-9',
  all: 'Все',
}

export default (params) => {
  const {
    language,
    letter,
    special,
  } = params;

  if (!language || !letter) {
    return specials[special] || special || 'Исполнители';
  }

  const letters = languages[language];
  return letters && letters[letter];
}
