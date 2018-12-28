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

    find (query, letter) {
        Artist.find(query)
            .then(artists => this.responseArtists(artists, letter))
            .catch(error => this.responseError(error));
    }

    responseArtists (artists, letter) {
        const title = letter ? letter.charAt(0).toUpperCase() + letter.slice(1) : letter;
        // const answer = [].concat(response, artists);
        Artist.getUnprocessed(letter)
            .then(response => {
                response.forEach(slug => {
                    const name = slug[0].toUpperCase() + slug.substring(1).replace(/_/g, ' ');
                    const artist = new Artist({ name, slug });
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

    const query = getQueryByLetter(translated);
    handler.find(query, translated);
});

router.get('/artists/:special', (req, res, next) => {
    const handler = new ArtistsHandler(req, res, next);

    const { special } = req.params;
    if (special === 'all') return handler.find({}, 'Все');
    if (special === 'other') return handler.find({ name: null }, 'Разные песни');

    handler.responseError('Unknown special query');
});

module.exports = router;
