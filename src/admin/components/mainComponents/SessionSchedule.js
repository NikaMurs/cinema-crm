import React, { useEffect, useState } from 'react';
import HallSelector from '../HallSelector';
import SubmitButtons from '../SubmitButtons';

export default function SessionSchedule({ halls, setHalls }) {
    const [selectedHall, setSelectedHall] = useState(0);
    const [savedHallState, setSavedHallState] = useState(undefined);

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
        <section className="conf-step">
            <header className="conf-step__header conf-step__header_opened">
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

                <div className="conf-step__seances">
                    <div className="conf-step__seances-hall">
                        <h3 className="conf-step__seances-title">Зал 1</h3>
                        <div className="conf-step__seances-timeline">
                            <div className="conf-step__seances-movie" style={{ width: "90px" }}>
                                <p className="conf-step__seances-movie-title">Звёздные войны</p>
                                <p className="conf-step__seances-movie-start">Начало: 10:00</p>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <SubmitButtons
                    handleCancel={handleCancel}
                    handleSave={handleSave} />
            </div>
        </section>
    );
}
