import config from '../config';

export const { letters } = config;

export function getLetter(language, letter) {
  const languageLetters = letters[language];
  if (!languageLetters) return null;

  return languageLetters[letter];
}
