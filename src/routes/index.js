import express from 'express';
import Artist from '../models/artist';

const router = express.Router();

function MockArtist (name) {
    return {
        name,
        slug: name,
        description: name,
    }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/json', (req, res) => {
  res.json({data: 'JSON'});
});

router.get('/artists/:letter', (req, res, next) => {
    const artists = [
        new MockArtist("Artists 1"),
        new MockArtist("Artists 2"),
        new MockArtist("Artists 3"),
        new MockArtist("Artists 4"),
        new MockArtist("Artists 5"),
    ];

    const letter = req.params.letter;
    Artist.find({})
        .then(response => {
            const answer = [].concat(response, artists);
            res.json({letter: letter, artists: answer});
        })
        .catch(error => {
            res.status(500).json({error: error});
        })
});

module.exports = router;
