import express from 'express';
import {
  addAlbum,
  getAlbum,
  removeAlbum,
  updateAlbum,
} from '../handlers/album';

const router = express.Router();

router.post('/', addAlbum);
router.get('/:slug', getAlbum);
router.put('/:id', updateAlbum);
router.delete('/:id', removeAlbum);

module.exports = router;
