const { Seance, Hall, Film } = require('../models');

exports.getAllSeances = async (req, res) => {
    try {
        const seances = await Seance.findAll({
            include: [
                { model: Hall, attributes: ['title'] },
                { model: Film, attributes: ['title', 'duration'] }
            ],
            order: [['id', 'ASC']]
        });
        res.json(seances);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createSeance = async (req, res) => {
    try {
        const newSeance = await Seance.create(req.body);
        res.status(201).json(newSeance);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

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
