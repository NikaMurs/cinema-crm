import React, { useEffect, useState } from 'react';
import HallSelector from '../HallSelector';
import SubmitButtons from '../SubmitButtons';
import SeancesTimeline from './SeancesTimeline';
import FilmsList from './FilmsList';
import toggleMenu from '../../functions/toggleMenu';

export default function SessionSchedule({ halls, setHalls, films, setFilms }) {
    const [selectedHall, setSelectedHall] = useState(0);
    const [savedHallState, setSavedHallState] = useState(undefined);

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
        const updatedHalls = halls.map((hall, index) => {
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

        setHalls(updatedHalls);
        setShowModal(false);
        setFilmToAdd(null);
    };

    const handleCancel = () => {
        setHalls((prevHallState) => {
            const newHallState = [...prevHallState];
            newHallState[selectedHall] = JSON.parse(JSON.stringify(savedHallState));
            return newHallState;
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

                    <FilmsList films={films} setFilms={setFilms} />
                    <div className="conf-step__seances">
                        <SeancesTimeline
                            setHalls={setHalls}
                            hallId={halls[selectedHall]?.id}
                            hallTitle={halls[selectedHall]?.title}
                            seances={halls[selectedHall]?.seances}
                            openSeanceModal={openSeanceModal}
                        />

                    </div>

                    <SubmitButtons
                        handleCancel={handleCancel}
                        handleSave={handleSave} />
                </div>
            </section>

            {showModal && (
                <div className="popup active">
                    <div className="popup__container">
                        <div className="popup__content">
                            <div className="popup__header">
                                <h2 className="popup__title">
                                    Добавление сеанса
                                    <a className="popup__dismiss" href="#" onClick={(e) => { e.preventDefault(); setShowModal(false); }}>✖</a>
                                </h2>
                            </div>
                            <div className="popup__wrapper">
                                <form onSubmit={(e) => { e.preventDefault(); addSeance(e.target.elements.time.value); }} method="post" acceptCharset="utf-8">
                                    <label className="conf-step__label conf-step__label-fullsize" htmlFor="time">
                                        Время начала
                                        <input className="conf-step__input" type="text" name="time" placeholder="15:00" required />
                                    </label>
                                    <div className="conf-step__buttons text-center">
                                        <input type="submit" value="Добавить сеанс" className="conf-step__button conf-step__button-accent" />
                                        <button className="conf-step__button conf-step__button-regular" type="button" onClick={() => setShowModal(false)}>Отменить</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
