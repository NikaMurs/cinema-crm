import React, { useEffect, useState } from 'react';
import HallSelector from '../../HallSelector';
import SubmitButtons from '../../SubmitButtons';
import SeancesTimeline from './SeancesTimeline';
import FilmsList from './FilmsList';
import SeanceModal from './SeanceModal';
import toggleMenu from '../../../functions/toggleMenu';
import moment from 'moment';

export default function SessionSchedule({ halls, setHalls, films, setFilms }) {
    const [selectedHall, setSelectedHall] = useState(0);
    const [savedHallState, setSavedHallState] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [filmToAdd, setFilmToAdd] = useState(null);
    const [newSeances, setNewSeances] = useState([]);

    useEffect(() => {
        if (halls[selectedHall]) {
            if (!savedHallState) {
                setSavedHallState(JSON.parse(JSON.stringify(halls[selectedHall])));
            }
        }
    }, [halls]);

    useEffect(() => {
        if (halls[selectedHall]) {
            setSavedHallState(JSON.parse(JSON.stringify(halls[selectedHall])));
        }
    }, [selectedHall]);

    const openSeanceModal = (filmId) => {
        const selectedFilm = films.find(film => film.id === parseInt(filmId));
        if (selectedFilm) {
            setFilmToAdd(selectedFilm);
            setShowModal(true);
        }
    };

    function convertTimeToMinutes(time) {
        const duration = moment.duration(moment(time, "HH:mm").format("HH:mm"), "HH:mm");
        const minutes = duration.asMinutes();
        return `${minutes}m`;
    }

    function parseMeasurement(measurement) {
        const match = measurement.match(/^(\d+\.?\d*)/);
        if (match) {
            return parseInt(match[1]);
        }
        return NaN;
    }

    const isTimeOverlap = (existingSeances, newSeance) => {
        const newStartTime = moment(newSeance.time, "HH:mm");
        const newEndTime = moment(newStartTime).add(parseMeasurement(newSeance.duration), 'minutes');

        return existingSeances.some(seance => {
            const seanceStartTime = moment(seance.time, "HH:mm");
            const seanceEndTime = moment(seanceStartTime).add(parseMeasurement(seance.duration), 'minutes');

            return newStartTime.isBefore(seanceEndTime) && seanceStartTime.isBefore(newEndTime);
        });
    };

    const addSeance = (time) => {
        const duration = convertTimeToMinutes(filmToAdd.duration);
        const newSeance = {
            filmId: filmToAdd.id,
            filmTitle: filmToAdd.title,
            time: time,
            duration: duration
        };

        setHalls((prevHalls) => {
            const updatedHalls = prevHalls.map((hall, index) => {
                if (index === selectedHall) {
                    if (isTimeOverlap(hall.seances, newSeance)) {
                        alert('Новый сеанс пересекается с уже существующими.');
                        return hall;
                    }

                    return {
                        ...hall,
                        seances: [
                            ...hall.seances,
                            newSeance
                        ]
                    };
                }
                return hall;
            });

            return updatedHalls;
        });

        setNewSeances((prevState) => [
            ...prevState,
            {
                filmId: filmToAdd.id,
                filmTitle: filmToAdd.title,
                time: time,
                duration: duration,
                hallId: halls[selectedHall].id
            }
        ]);

        setShowModal(false);
        setFilmToAdd(null);
    };



    const handleCancel = () => {
        setHalls((prevHalls) => {
            const updatedHalls = [...prevHalls];
            updatedHalls[selectedHall] = JSON.parse(JSON.stringify(savedHallState));
            return updatedHalls;
        });
        setNewSeances([])
    };

    const handleSave = async () => {
        const seancesToCreate = [...newSeances];

        for (const seance of seancesToCreate) {
            try {
                const response = await fetch(`${process.env.REACT_APP_URL}/seances`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(seance),
                });

                if (!response.ok) {
                    throw new Error('Ошибка создания сеанса');
                }

                const newSeance = await response.json();
            } catch (error) {
                console.error('Ошибка создания сеанса:', error);
            }
        }
        setSavedHallState(JSON.parse(JSON.stringify(halls[selectedHall])));
        setNewSeances([]);
    };


    return (
        <>
            <section className="conf-step">
                <header className="conf-step__header conf-step__header_opened" onClick={toggleMenu}>
                    <h2 className="conf-step__title">Сетка сеансов</h2>
                </header>
                <div className="conf-step__wrapper">
                    <HallSelector
                        type="schedule"
                        halls={halls}
                        selectedHall={selectedHall}
                        setSelectedHall={setSelectedHall}
                        handleCancel={handleCancel}
                    />
                    <FilmsList films={films} setFilms={setFilms} openSeanceModal={openSeanceModal} />
                    {halls?.length ?
                        <div className="conf-step__seances">
                            <SeancesTimeline
                                setHalls={setHalls}
                                hallId={halls[selectedHall]?.id}
                                hallTitle={halls[selectedHall]?.title}
                                seances={halls[selectedHall]?.seances}
                                openSeanceModal={openSeanceModal}
                            />
                        </div>
                        :
                        <></>
                    }
                    <SubmitButtons handleCancel={handleCancel} handleSave={handleSave} />
                </div>
            </section>

            {showModal && (
                <SeanceModal
                    setShowModal={setShowModal}
                    addSeance={addSeance}
                />
            )}
        </>
    );
}
