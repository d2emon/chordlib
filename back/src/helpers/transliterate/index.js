import allLetters from './letters';

export default (language, letter) => {
  if (!language || !letter) return null;

  const letters = allLetters[language];
  return letters ? letters[letter] : null;
};
