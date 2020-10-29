import express from 'express'
import Song from '../models/song';
import Album from '../models/album';
import Artist from '../models/artist';

const router = express.Router();

router.get('/:slug', (req, res, next) => {
    const slug = req.params.slug;
    Song
        .findOne({slug: slug})
        .populate('author')
        .populate('album')
        .then(response => res.json({song: response}))
        .catch(error => res.status(500).json({error: error}));
});

router.post('/', (req, res, next) => {
    const values = req.body;
    Promise
        .all([
            Artist.findOne({ slug: values.author }),
            Album.findOne({ slug: values.album }),
        ])
        .then(([ author, album ]) => {
            if (author) values.author = author.id;
            if (album) values.album = album.id;
            const song = new Song(values);
            return song.save()
        })
        .then(song => res.json({ song }))
        .catch(error => res.status(500).json({ error }));
});

router.put('/:id', (req, res, next) => {
    const _id = req.params.id;
    const values = req.body;
    Song
        .updateOne({ _id }, values)
        .then(result => {
            return {
                song: Song.findById(_id),
                result
            };
        })
        .then(response => res.json(response))
        .catch(error => res.status(500).json({ error }));
});

router.delete('/:slug', (req, res, next) => {
    const slug = req.params.slug;
    Song
        .deleteOne({ slug })
        .then(response => res.json({ response }))
        .catch(error => res.status(500).json({ error }));
});

module.exports = router;
