import express from 'express';
import {
  listArtists,
  addArtist,
  getArtist,
  updateArtist,
  removeArtist,
  getArtistPage,
  getArtistFromWikipedia,
} from '../handlers/artist';

const router = express.Router();

router.get('/', listArtists);
router.post('/', addArtist);
router.get('/:slug', getArtist);
router.put('/:id', updateArtist);
router.delete('/:id', removeArtist);
router.get('/:slug/page', getArtistPage);
router.get('/wikipedia/:name', getArtistFromWikipedia);

module.exports = router;
