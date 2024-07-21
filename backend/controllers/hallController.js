const { Hall, Seance, Film } = require('../models');

exports.getAllHalls = async (req, res) => {
    try {
        const halls = await Hall.findAll({
            order: [['id', 'ASC']]
        });
        res.json(halls);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createHall = async (req, res) => {
    try {
        const newHall = await Hall.create(req.body);
        res.status(201).json(newHall);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateHall = async (req, res) => {
    try {
        const hall = await Hall.findByPk(req.params.id);
        if (hall) {
            await hall.update(req.body);
            res.json(hall);
        } else {
            res.status(404).json({ error: 'Hall not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteHall = async (req, res) => {
    try {
        const hall = await Hall.findByPk(req.params.id);
        if (hall) {
            await hall.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Hall not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getHallById = async (req, res) => {
    try {
        const hall = await Hall.findByPk(req.params.id, {
            include: {
                model: Seance,
                include: [Film]
            }
        });

        if (hall) {
            const seances = hall.Seances.map(seance => ({
                time: seance.time,
                filmId: seance.filmId,
                filmTitle: seance.Film.title,
                duration: seance.Film.duration
            }));

            res.json({
                id: hall.id,
                title: hall.title,
                rows: hall.rows,
                price: hall.price,
                seances: seances,
                isActive: hall.isActive
            });
        } else {
            res.status(404).json({ error: 'Hall not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
