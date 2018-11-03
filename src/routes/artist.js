import express from 'express'
import Artist from '../models/artist';

const router = express.Router();

router.get('/:slug', (req, res, next) => {
    const slug = req.params.slug;
    Artist.findOne({slug: slug})
        .then(response => {
            res.json({artist: response});
        })
        .catch(error => {
            res.status(500).json({error: error});
        })
});

router.post('/', (req, res, next) => {
    const artist = new Artist(req.body);
    artist.save()
        .then(response => {
            res.json({artist: response});
        })
        .catch(error => {
            res.status(500).json({error: error});
        })
});

router.put('/:slug', (req, res, next) => {
    console.log(req.query);
    const slug = req.params.slug;
    let result;
    Artist.updateOne({slug: slug}, req.query)
        .then(response => {
            result = response;
            return Artist.find({slug: slug});
        })
        .then(response => {
            res.json({artist: response, result: result});
        })
        .catch(error => {
            res.status(500).json({error: error});
        })
});

router.delete('/:slug', (req, res, next) => {
    const slug = req.params.slug;
    Artist.deleteOne({slug: slug})
        .then(response => {
            res.json({result: response});
        })
        .catch(error => {
            res.status(500).json({error: error});
        })
});

module.exports = router;
