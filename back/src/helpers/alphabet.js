const listAlphabet = (first, last) => {
  const letters = [];
  for (let l = first.charCodeAt(0); l < last.charCodeAt(0); l += 1) {
    letters.push(String.fromCharCode(l));
  }
  return letters;
};

const alphabets = {
  ru: listAlphabet('А', 'Я'),
  en: listAlphabet('A', 'Z'),
};

export default (language) => {
  if (language) {
    return {
      [language]: alphabets[language],
    };
  }
  return { ...alphabets };
};
