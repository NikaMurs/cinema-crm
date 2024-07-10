import React, { useEffect, useState } from 'react';
import HallSelector from '../../HallSelector';
import SubmitButtons from '../../SubmitButtons';
import SeancesTimeline from './SeancesTimeline';
import FilmsList from './FilmsList';
import SeanceModal from './SeanceModal';
import toggleMenu from '../../../functions/toggleMenu';

export default function SessionSchedule({ halls, setHalls, films, setFilms }) {
    const [selectedHall, setSelectedHall] = useState(0);
    const [savedHallState, setSavedHallState] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [filmToAdd, setFilmToAdd] = useState(null);

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

    const addSeance = (time) => {
        setHalls((prevHalls) => {
            const updatedHalls = prevHalls.map((hall, index) => {
                if (index === selectedHall) {
                    return {
                        ...hall,
                        seances: [
                            ...hall.seances,
                            {
                                filmId: filmToAdd.id,
                                filmTitle: filmToAdd.title,
                                time: time,
                                duration: filmToAdd.duration
                            }
                        ]
                    };
                }
                return hall;
            });
            return updatedHalls;
        });
        setShowModal(false);
        setFilmToAdd(null);
    };

    const handleCancel = () => {
        setHalls((prevHalls) => {
            const updatedHalls = [...prevHalls];
            updatedHalls[selectedHall] = JSON.parse(JSON.stringify(savedHallState));
            return updatedHalls;
        });
    };

    const handleSave = () => {
        // fetch запрос на сохранение
        setSavedHallState(JSON.parse(JSON.stringify(halls[selectedHall])));
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
                    <div className="conf-step__seances">
                        <SeancesTimeline
                            setHalls={setHalls}
                            hallId={halls[selectedHall]?.id}
                            hallTitle={halls[selectedHall]?.title}
                            seances={halls[selectedHall]?.seances}
                            openSeanceModal={openSeanceModal}
                        />
                    </div>
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
