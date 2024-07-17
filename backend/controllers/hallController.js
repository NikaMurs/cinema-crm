const { Hall } = require('../models');

// Получить все залы
exports.getAllHalls = async (req, res) => {
    try {
        const halls = await Hall.findAll();
        res.json(halls);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Создать новый зал
exports.createHall = async (req, res) => {
    try {
        const newHall = await Hall.create(req.body);
        res.status(201).json(newHall);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Обновить информацию о зале
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

// Удалить зал
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
