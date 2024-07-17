const { Film } = require('../models');

// Получить все фильмы
exports.getAllFilms = async (req, res) => {
    try {
        const films = await Film.findAll();
        res.json(films);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Создать новый фильм
exports.createFilm = async (req, res) => {
    try {
        const newFilm = await Film.create(req.body);
        res.status(201).json(newFilm);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Обновить информацию о фильме
exports.updateFilm = async (req, res) => {
    try {
        const film = await Film.findByPk(req.params.id);
        if (film) {
            await film.update(req.body);
            res.json(film);
        } else {
            res.status(404).json({ error: 'Film not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Удалить фильм
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
