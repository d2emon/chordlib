import express from 'express'
import {
  addSong,
  getSong,
  removeSong,
  updateSong,
} from '../handlers/song';

const router = express.Router();

router.get('/:slug', getSong);
router.post('/', addSong);
router.put('/:id', updateSong);
router.delete('/:id', removeSong);

module.exports = router;
