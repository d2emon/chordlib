import express from 'express';
import Artist from '../models/artist';

const router = express.Router();

router.get('/:slug', (req, res) => {
  const { slug } = req.params;
  Artist
    .findOne({ slug })
    .populate('albums')
    .populate('songs')
    .then((artist) => {
      if (artist) return artist;
      return Artist.findInWikipedia(slug);
    })
    .then(artist => res.json({ artist }))
    .catch(error => res.status(500).json({ error: error.toString() }));
});

router.post('/', (req, res) => {
  const artist = new Artist(req.body);
  artist.save()
    .then((response) => {
      res.json({ artist: response });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  let result;
  Artist.updateOne({ _id: id }, req.body)
    .then((response) => {
      result = response;
      return Artist.findById(id);
    })
    .then((response) => {
      res.json({ artist: response, result });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
});

router.delete('/:slug', (req, res) => {
  const { slug } = req.params;
  Artist.deleteOne({ slug })
    .then((response) => {
      res.json({ result: response });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
});

module.exports = router;
