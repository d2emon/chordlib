import express from 'express';
import Artist from '../models/artist';
import { getLetter } from '../models/letters';

const router = express.Router();

function getQueryByLetter (letter) {
    if (!letter) return {};

    return {
        name: {
            $regex: '^' + letter,
            $options: 'i',
        },
    };
}

class ArtistsHandler {
    constructor (req, res) {
        this.res = res;
    }

    find (letter, title, query) {
        const answer = letter
            ? Artist.findByLetter(letter)
            : Artist.find(query);
        answer
            .then(artists => this.responseArtists(title, letter, artists))
            .catch(error => this.responseError(error));
    }

    responseArtists (title, letter, artists) {
        if (!title)
            title = letter ? letter.charAt(0).toUpperCase() + letter.slice(1) : letter;
        // const answer = [].concat(response, artists);
        Artist.getUnprocessed(letter)
            .then(response => {
                response.forEach(slug => {
                    const name = slug[0].toUpperCase() + slug.substring(1).replace(/_/g, ' ');
                    // const artist = new Artist({ name, slug, unprocessed: true });
                    const artist = { name, slug, unprocessed: true };
                    artists.push(artist);
                });
                this.res.json({
                    artists,
                    title,
                })
            });
    }

    responseError (error) {
        console.log(error);
        this.res.status(500).json({ error: error });
    }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/json', (req, res) => {
  res.json({data: 'JSON'});
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

module.exports = router;
