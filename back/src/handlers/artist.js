import Artist from '../models/artist';
import transliterate from '../helpers/transliterate';
import {
  successResponse,
  errorResponse,
} from '../helpers/response';

const specials = {
  all: {
    query: {},
    /*
    options: {
      name: null,
    },
     */
  },
  other: {
    query: {
      name: {
        $regex: '^$',
        $options: 'i',
      }
    },
  },
  num: {
    query: {
      name: {
        $regex: '^[0-9]$',
        $options: 'i',
      }
    },
  },
};

const getTitle = letter => letter && (letter.charAt(0).toUpperCase() + letter.slice(1));

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
    const { unprocessed } = req.query;

    const transliterated = transliterate(language, letter);
    const artistQuery = (special && specials[special])
      ? Artist.find(
        specials[special].query,
        specials[special].options,
      )
      : Artist.findByLetter(letter);

    const processedArtists = await artistQuery.sort({ name: 1 });
    const unprocessedArtists = (unprocessed || (unprocessed === undefined))
      ? await Artist.getUnprocessed(letter)
      : [];

    return res.json(successResponse({
      artists: [
        ...processedArtists,
        ...unprocessedArtists,
      ],
    }));
  } catch (e) {
    return res.status(500).json(errorResponse(e));
  }
};

export const getArtist = async (req, res) => {
  try {
    const slug = req.params.slug || null;

    const name = Artist.slugToName(slug);
    const processedArtist = await Artist
      .findOne({ slug })
      .populate('albums')
      .populate('songs');
    const artist = processedArtist || await Artist.findInWikipedia({ name, slug });
    // const artist = await Artist.files(slug).then(files => ({ artist, files })));

    const files = await Artist.files(slug);
    if (files) {
      const pages = artist.pages || [];
      artist.pages = [
        ...pages,
        ...files,
      ];
    }

    const description = await Artist.descriptionFile(slug);
    artist.description = artist.description || (description ? description.text : '');

    return res.json(successResponse({ artist }));
  } catch (e) {
    return res.status(500).json(errorResponse(e));
  }
};

export const addArtist = async (req, res) => {
  try {
    const artist = new Artist(req.body);
    const response = await artist.save();
    return res.json(successResponse({ artist: response }));
  } catch (e) {
    return res.status(500).json(errorResponse(e));
  }
};

export const updateArtist = async (req, res) => {
  try {
    const id = req.params.id || null;

    const result = await Artist.updateOne({ _id: id }, req.body);
    const artist = await Artist.findById(id);
    return res.json(successResponse({
      artist,
      result,
    }));
  } catch (e) {
    return res.status(500).json(errorResponse(e));
  }
};

export const removeArtist = async (req, res) => {
  try {
    const id = req.params.id || null;

    const result = Artist.deleteOne({ id });
    return res.json(successResponse({
      result,
    }));
  } catch (e) {
    return res.status(500).json(errorResponse(e));
  }
};

export const getArtistPage = async (req, res) => {
  try {
    const slug = req.params.slug || null;
    const pageId = req.query.page || null;

    const page = await Artist.file(slug, pageId);
    return res.json(successResponse({
      page,
    }));
  } catch (e) {
    return res.status(500).json(errorResponse(e));
  }
};

export const getArtistFromWikipedia = async (req, res) => {
  try {
    const name = req.params.name || req.query.name;

    const artist = await Artist.findInWikipedia({ name });
    return res.json(successResponse({
      artist,
    }));
  } catch (e) {
    return res.status(500).json(errorResponse(e));
  }
};
