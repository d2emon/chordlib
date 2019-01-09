import express from 'express';
import Artist from '../models/artist';
import { slugToName } from '../helpers';
import wiki from '../helpers/wiki';

const router = express.Router();

router.get('/:slug', (req, res) => {
  const { slug } = req.params;
  Artist
    .findOne({ slug })
    .populate('albums')
    .populate('songs')
    .then((artist) => {
      if (artist) return artist;
      const name = slugToName(slug);
      return wiki
        .page(name)
        .then(page => ({
          name,
          slug,
          page,
          unprocessed: true,
        }))
        .catch(() => ({
          name,
          slug,
          unprocessed: true,
        }));
    })
    .then((artist) => {
      const {
        page,
        unprocessed,
        ...props
      } = artist;
      if (!unprocessed || !page) return artist;
      return Promise.all([
        // page.info('название'),
        page.summary(),
        page.mainImage(),
        page.info('жанр'),
        // page.fullInfo(),
      ])
        .then((
          [
            // title,
            description,
            image,
            genres,
            // info,
          ],
        ) => ({
          ...props,
          name: page.raw.title,
          wikiLink: page.raw.fullurl,
          // title,
          description,
          image,
          genres,
          // info,
          // raw: page.raw,
          unprocessed: true,
        }));
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
