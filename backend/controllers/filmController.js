const { Film } = require('../models');
const path = require('path');
const fs = require('fs');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = 'uploads/';
        fs.mkdirSync(uploadPath, { recursive: true });
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

exports.getAllFilms = async (req, res) => {
    try {
        const films = await Film.findAll({
            order: [['id', 'ASC']]
        });
        res.json(films);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createFilm = async (req, res) => {
    upload.single('poster')(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        
        const { title, duration, filmDescription, country } = req.body;
        const poster = req.file ? req.file.path : null;

        try {
            const newFilm = await Film.create({ title, duration, filmDescription, country, poster });
            res.status(201).json(newFilm);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
};

exports.updateFilm = async (req, res) => {
    try {
        const film = await Film.findByPk(req.params.id);
        if (film) {
            const { title, duration, filmDescription, country } = req.body;
            const poster = req.file ? req.file.path : film.poster;
            await film.update({ title, duration, filmDescription, country, poster });
            res.json(film);
        } else {
            res.status(404).json({ error: 'Film not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteFilm = async (req, res) => {
    try {
        const film = await Film.findByPk(req.params.id);
        if (film) {
            await film.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Film not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
