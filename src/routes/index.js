import express from 'express';
import Artist from '../models/artist';

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/json', (req, res) => {
  res.json({data: 'JSON'});
});

router.get('/artists/:letter', (req, res, next) => {
    const letter = req.params.letter;
    Artist.find({})
        .then(response => {
            res.json({letter: letter, artists: response});
        })
        .catch(error => {
            res.status(500).json({error: error});
        })
});

module.exports = router;
