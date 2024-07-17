const { Seance, Hall, Film } = require('../models');

// Получить все сеансы
exports.getAllSeances = async (req, res) => {
    try {
        const seances = await Seance.findAll({
            include: [
                { model: Hall, attributes: ['title'] },
                { model: Film, attributes: ['title', 'duration'] }
            ]
        });
        res.json(seances);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Создать новый сеанс
exports.createSeance = async (req, res) => {
    try {
        const newSeance = await Seance.create(req.body);
        res.status(201).json(newSeance);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Обновить информацию о сеансе
exports.updateSeance = async (req, res) => {
    try {
        const seance = await Seance.findByPk(req.params.id);
        if (seance) {
            await seance.update(req.body);
            res.json(seance);
        } else {
            res.status(404).json({ error: 'Seance not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Удалить сеанс
exports.deleteSeance = async (req, res) => {
    try {
        const seance = await Seance.findByPk(req.params.id);
        if (seance) {
            await seance.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Seance not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
