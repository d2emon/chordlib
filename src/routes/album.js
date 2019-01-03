import express from 'express'
import Album from '../models/album';
import Artist from '../models/artist';

const router = express.Router();

router.get('/:slug', (req, res, next) => {
    const slug = req.params.slug;
    Album
        .findOne({slug: slug})
        .populate('author')
        .populate('songs')
        .then(response => {
            res.json({album: response});
        })
        .catch(error => {
            res.status(500).json({error: error});
        })
});

router.post('/', (req, res, next) => {
    const values = req.body;
    Artist
        .findOne({ slug: values.author })
        .then(author => {
            if (author) values.author = author.id;
            const album = new Album(values);
            return album.save()
        })
        .then(response => {
            res.json({album: response});
        })
        .catch(error => {
            res.status(500).json({error: error});
        })
});

router.put('/:id', (req, res, next) => {
    const _id = req.params.id;
    let result;
    Album.updateOne({ _id }, req.body)
        .then(response => {
            result = response;
            return Album.findById(_id);
        })
        .then(response => {
            res.json({album: response, result: result});
        })
        .catch(error => {
            res.status(500).json({error: error});
        })
});

router.delete('/:slug', (req, res, next) => {
    const slug = req.params.slug;
    Album.deleteOne({slug: slug})
        .then(response => {
            res.json({result: response});
        })
        .catch(error => {
            res.status(500).json({error: error});
        })
});

module.exports = router;
