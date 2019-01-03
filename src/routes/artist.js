import express from 'express'
import Artist from '../models/artist';
import Album from '../models/album';

const router = express.Router();

router.get('/:slug', (req, res, next) => {
    const slug = req.params.slug;
    Artist
        .findOne({slug: slug})
        .populate('albums')
        .populate('songs')
        .then(artist => {
            res.json({ artist });
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

router.put('/:id', (req, res, next) => {
    const _id = req.params.id;
    let result;
    Artist.updateOne({ _id }, req.body)
        .then(response => {
            result = response;
            return Artist.findById(_id);
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
