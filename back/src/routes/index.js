import express from 'express';
import {
  listArtists,
} from '../handlers/artist';
import {
  getPage,
  getPageData,
  listPages,
} from '../handlers/page';
import {
  successResponse,
} from '../helpers/response';

const router = express.Router();

router.get('/', (req, res) => res.json(successResponse({ data: 'JSON' })));
router.get('/artists/:language/:letter', listArtists);
router.get('/artists/:special', listArtists);
router.get('/pages', listPages);
router.get('/page/:filename.md', getPage);
router.get('/page/:filename.json', getPageData);

module.exports = router;
