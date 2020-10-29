import express from 'express';
import {
  listArtists,
} from '../handlers/artist';
import {
  getPage,
  listPages,
} from '../handlers/page';
import {
  successResponse,
} from '../helpers/response';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => res.json(successResponse({ data: 'JSON' })));
router.get('/artists/:language/:letter', listArtists);
router.get('/artists/:special', listArtists);
router.get('/pages', listPages);
router.get('/page/:filename', getPage);

module.exports = router;
