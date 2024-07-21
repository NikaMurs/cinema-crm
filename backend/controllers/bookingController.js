const { Booking, Seance, Hall, Film } = require('../models');

exports.createBooking = async (req, res) => {
    try {
        const { date, time, hallId, filmId, selectedChairs } = req.body;

        const hall = await Hall.findByPk(hallId);
        const film = await Film.findByPk(filmId);
        const seance = await Seance.findOne({
            where: {
                hallId: hallId,
                filmId: filmId,
                time: time,
            }
        });
        if (!hall || !film || !seance) {
            return res.status(400).json({ error: 'Invalid hall, film or seance' });
        }

        const existingBookings = await Booking.findAll({
            where: {
                date: date,
                time: time,
                hallId: hallId,
                filmId: filmId,
            }
        });

        const takenChairs = existingBookings.reduce((acc, booking) => {
            return acc.concat(booking.selectedChairs);
        }, []);

        for (let chair of selectedChairs) {
            if (takenChairs.includes(chair)) {
                return res.status(400).json({ error: `Seat ${chair} is already taken` });
            }
        }

        const newBooking = await Booking.create({
            date,
            time,
            hallId,
            filmId,
            selectedChairs
        });

        res.status(201).json(newBooking);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getTakenSeats = async (req, res) => {
    try {
        const { date, time, hallId, filmId } = req.query;

        const hall = await Hall.findByPk(hallId);
        const film = await Film.findByPk(filmId);
        const seance = await Seance.findOne({
            where: {
                hallId: hallId,
                filmId: filmId,
                time: time,
            }
        });

        if (!hall || !film || !seance) {
            return res.status(400).json({ error: 'Invalid hall, film or seance' });
        }

        const existingBookings = await Booking.findAll({
            where: {
                date: date,
                time: time,
                hallId: hallId,
                filmId: filmId,
            }
        });

        const takenChairs = existingBookings.reduce((acc, booking) => {
            return acc.concat(booking.selectedChairs);
        }, []);

        res.status(200).json({ takenChairs });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
