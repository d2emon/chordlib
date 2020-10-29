import slugToName from '../helpers/slug_to_name';
import Artist from '../models/artist';
import { getLetter } from '../models/letters';
import {
  successResponse,
  errorResponse,
} from '../helpers/response';

const specials = {
  all: {
    title: 'Все',
    query: null,
    options: {
      name: null,
    },
  },
  other: {
    title: 'Разные песни',
    query: '',
  },
  num: {
    title: '#',
    query: '[0-9]',
  },
};

const getTitle = letter => letter && (letter.charAt(0).toUpperCase() + letter.slice(1));

const getUnprocessedArtists = letter => Artist
  .getUnprocessed(letter)
  .then(artists => artists.map(slug => ({
    name: slugToName(slug),
    slug,
    unprocessed: true,
  })));

const find = async (letter, query) => {
  const answer = letter
    ? Artist.findByLetter(letter)
    : Artist.find(query);

  return answer.sort({ name: 1 });
};

export const listArtists = async (req, res) => {
  try {
    const language = req.params.language || req.query.language;
    const letter = req.params.letter || req.query.letter;
    const special = req.params.special || req.query.special;
    const unprocessed = req.query.unprocessed || false;

    const translated = letter && language && getLetter(language, letter);
    const title = (special && specials[special]) ? specials[special].title : getTitle(letter);

    const processedArtists = (special && specials[special])
      ? await find(
        specials[special].query,
        specials[special].options,
      )
      : await find(translated);
    const unprocessedArtists = unprocessed
      ? await getUnprocessedArtists()
      : [];

    return res.json(successResponse({
      title,
      artists: [
        ...processedArtists,
        ...unprocessedArtists,
      ],
    }));
  } catch (e) {
    res.status(500).json(errorResponse(e));
  }
};
