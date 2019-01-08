import express from 'express';
import Artist from '../models/artist';
import { getLetter } from '../models/letters';
import Page from '../models/page';

const router = express.Router();

function slugToName(slug) {
  return slug[0].toUpperCase() + slug.substring(1).replace(/-/g, ' ');
}

class ArtistsHandler {
  constructor(req, res) {
    this.res = res;
  }

  find(letter, title, query) {
    const answer = letter
      ? Artist.findByLetter(letter)
      : Artist.find(query);
    answer
      .sort({ name: 1 })
      .then(artists => this.responseArtists(title, letter, artists))
      .catch(error => this.responseError(error));
  }

  responseArtists(title, letter, artists) {
    if (!title) title = letter ? letter.charAt(0).toUpperCase() + letter.slice(1) : letter;
    // const answer = [].concat(response, artists);
    Artist.getUnprocessed(letter)
      .then((response) => {
        /*
                response.forEach(slug => {
                    // const artist = new Artist({ name, slug, unprocessed: true });
                    artists.push({
                        name: slugToName(slug),
                        slug,
                        unprocessed: true
                    });
                });
                */
        artists = artists.concat(response.map(slug => ({
          name: slugToName(slug),
          slug,
          unprocessed: true,
        })));
        this.res.json({
          artists,
          title,
        });
      });
  }

  responseError(error) {
    console.log(error);
    this.res.status(500).json({ error });
  }
}

function responsePageError(res, error) {
  const status = (error.code === 'ENOENT') ? 404 : 500;
  return res.status(status).json({ error: error.toString() });
}

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/json', (req, res) => {
  res.json({ data: 'JSON' });
});

router.get('/artists/:language/:letter', (req, res, next) => {
  const handler = new ArtistsHandler(req, res, next);

  const { language, letter } = req.params;
  if (!language || !letter) return handler.responseArtists([], letter);

  const translated = getLetter(language, letter);

  if (!translated) return handler.responseArtists([]);

  handler.find(translated);
});

router.get('/artists/:special', (req, res, next) => {
  const handler = new ArtistsHandler(req, res, next);

  const { special } = req.params;
  if (special === 'all') return handler.find(null, 'Все');
  if (special === 'other') return handler.find('', 'Разные песни', { name: null });
  if (special === 'num') return handler.find('[0-9]', '#');

  handler.responseError('Unknown special query');
});

router.get('/pages', (req, res) => {
  Page
    .all()
    .then(pages => ({ pages }))
    .then(response => res.json(response))
    .catch(error => responsePageError(res, error));
});

router.get('/page/:filename', (req, res) => {
  const { filename } = req.params;
  Page
    .find(filename)
    .then(page => ({ page }))
    .then(response => res.json(response))
    .catch(error => responsePageError(res, error));
});

module.exports = router;
