import Album from '../models/album';
import Artist from '../models/artist';
import Song from '../models/song';
import {
  errorResponse,
  successResponse,
} from '../helpers/response';

export const getSong = async (req, res) => {
  try {
    const slug = req.params.slug || null;

    const song = await Song
      .findOne({ slug })
      .populate('author')
      .populate('album');

    return res.json(successResponse({
      song,
    }));
  } catch (e) {
    return res.status(500).json(errorResponse(e));
  }
};

export const addSong = async (req, res) => {
  try {
    const values = req.body;

    const [
      author,
      album,
    ] = await Promise.all([
      Artist.findOne({ slug: values.author }),
      Album.findOne({ slug: values.album }),
    ]);
    if (author) values.author = author.id;
    if (album) values.album = album.id;

    const song = new Song(values);
    const result = await song.save();

    return res.json(successResponse({
      song: result,
    }));
  } catch (e) {
    return res.status(500).json(errorResponse(e));
  }
};

export const updateSong = async (req, res) => {
  try {
    const id = req.params.id || null;

    const result = await Song.updateOne({ id }, req.body);
    const song = await Song.findById(id);

    return res.json(successResponse({
      song,
      result,
    }));
  } catch (e) {
    return res.status(500).json(errorResponse(e));
  }
};

export const removeSong = async (req, res) => {
  try {
    const id = req.params.id || null;

    const result = await Song.deleteOne({ id });
    return res.json(successResponse({
      result,
    }));
  } catch (e) {
    return res.status(500).json(errorResponse(e));
  }
};
