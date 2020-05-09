import languages from './letters';

export default (language, letter) => {
  const letters = languages[language];
  return letters && letters[letter];
}
