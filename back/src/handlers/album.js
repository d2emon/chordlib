import Album from '../models/album';
import Artist from '../models/artist';
import {
  errorResponse,
  successResponse,
} from '../helpers/response';

export const getAlbum = async (req, res) => {
  try {
    const slug = req.params.slug || null;

    const album = await Album
      .findOne({ slug })
      .populate('author')
      .populate('songs');

    return res.json(successResponse({
      album,
    }));
  } catch (e) {
    return res.status(500).json(errorResponse(e));
  }
};

export const addAlbum = async (req, res) => {
  try {
    const values = req.body;

    const author = await Artist.findOne({ slug: values.author });
    if (author) values.author = author.id;

    const album = new Album(values);
    const result = await album.save();

    return res.json(successResponse({
      album: result,
    }));
  } catch (e) {
    return res.status(500).json(errorResponse(e));
  }
};

export const updateAlbum = async (req, res) => {
  try {
    const id = req.params.id || null;

    const result = await Album.updateOne({ id }, req.body);
    const album = await Album.findById(id);

    return res.json(successResponse({
      album,
      result,
    }));
  } catch (e) {
    return res.status(500).json(errorResponse(e));
  }
};

export const removeAlbum = async (req, res) => {
  try {
    const id = req.params.id || null;

    const result = await Album.deleteOne({ id });
    return res.json(successResponse({
      result,
    }));
  } catch (e) {
    return res.status(500).json(errorResponse(e));
  }
};
