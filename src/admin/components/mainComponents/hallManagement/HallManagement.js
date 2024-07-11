import React, { useState } from 'react';
import toggleMenu from '../../../functions/toggleMenu';
import AddHallPopup from './AddHallPopup';

export default function HallManagement({ halls, setHalls }) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleAddHall = (newHallName) => {
        if (newHallName.trim() !== '') {
            const newHall = {
                id: halls.length ? halls[halls.length - 1].id + 1 : 1,
                title: newHallName.trim(),
                rows: [['standart']],
                price: {
                    standart: 0,
                    vip: 0,
                },
                seances: {},
                isActive: false,
            };
            setHalls([...halls, newHall]);
            setIsPopupOpen(false);
        }
    };

    const handleDeleteHall = (hallId) => {
        setHalls(halls.filter(hall => hall.id !== hallId));
    };

    return (
        <>
            <section className="conf-step">
                <header className="conf-step__header conf-step__header_opened" onClick={toggleMenu}>
                    <h2 className="conf-step__title">Управление залами</h2>
                </header>
                <div className="conf-step__wrapper">
                    <div className="conf-step__paragraph">Доступные залы:</div>
                    <ul className="conf-step__list">
                        {halls.map((hall) => (
                            <li key={hall.id}>
                                {hall.title}
                                <button
                                    className="conf-step__button conf-step__button-trash"
                                    onClick={() => handleDeleteHall(hall.id)}
                                ></button>
                            </li>
                        ))}
                    </ul>
                    <button
                        className="conf-step__button conf-step__button-accent"
                        onClick={() => setIsPopupOpen(true)}
                    >
                        Создать зал
                    </button>
                </div>
            </section>
            <AddHallPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                onAddHall={handleAddHall}
            />
        </>
    );
}
