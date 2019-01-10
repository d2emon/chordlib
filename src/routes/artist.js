import express from 'express';
import Artist from '../models/artist';

const router = express.Router();

router.get('/:slug/page', (req, res) => {
  const { slug } = req.params;
  const { page } = req.query;
  Artist
    .file(slug, page)
    .then(file => res.json({ page: file }));
});

router.get('/:slug', (req, res) => {
  const { slug } = req.params;
  Artist
    .findOne({ slug })
    .populate('albums')
    .populate('songs')
    .then((artist) => {
      if (artist) return artist;
      const name = Artist.slugToName(slug);
      return Artist.findInWikipedia({ name, slug });
    })
    // .then(artist => Artist.files(slug).then(files => ({ artist, files })))
    .then(artist => Artist
      .files(slug)
      .then((files) => {
        artist.pages = artist.pages.concat(files);
        return artist;
      }))
    .then(artist => Artist
      .descriptionFile(slug)
      .then(description => {
        console.log(description);
        if (!description) return artist;
        if (!artist.description) artist.description = description.text;
        return artist;
      }))
    .then(artist => res.json({ artist }))
    .catch(error => res.status(500).json({ error: error.toString() }));
});

router.get('/wikipedia/:name', (req, res) => {
  const { name } = req.params;
  // const slug = name;
  Artist
    .findInWikipedia({ name })
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
