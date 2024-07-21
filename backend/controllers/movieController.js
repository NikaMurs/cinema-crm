const { Film, Hall, Seance } = require('../models');

const compareTimes = (a, b) => {
    const [aHours, aMinutes] = a.split(':').map(Number);
    const [bHours, bMinutes] = b.split(':').map(Number);
    return aHours - bHours || aMinutes - bMinutes;
};

exports.getMoviesWithSeances = async (req, res) => {
    try {
        const films = await Film.findAll({
            order: [['id', 'ASC']],
            include: {
                model: Seance,
                include: [
                    { model: Hall }
                ]
            }
        });

        const result = films.map(film => {
            const seancesHalls = film.Seances.reduce((acc, seance) => {
                if (!seance.Hall.isActive) return acc;

                let hall = acc.find(hall => hall.hallId === seance.Hall.id);

                if (!hall) {
                    hall = {
                        hallId: seance.Hall.id,
                        title: seance.Hall.title,
                        seances: []
                    };
                    acc.push(hall);
                }

                hall.seances.push(seance.time);

                return acc;
            }, []);

            seancesHalls.forEach(hall => {
                hall.seances.sort(compareTimes);
            });

            return {
                filmId: film.id,
                title: film.title,
                description: film.filmDescription,
                duration: film.duration,
                country: film.country,
                poster: film.poster,
                seancesHalls: seancesHalls
            };
        });

        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
