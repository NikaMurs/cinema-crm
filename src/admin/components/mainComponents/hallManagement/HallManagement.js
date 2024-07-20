import React, { useState } from 'react';
import toggleMenu from '../../../functions/toggleMenu';
import AddHallPopup from './AddHallPopup';

export default function HallManagement({ halls, setHalls }) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleDeleteHall = async (hallId) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/halls/${hallId}`, {
                method: 'DELETE'
            });

            if (response.status === 204) {
                setHalls(halls.filter(hall => hall.id !== hallId));
            } else if (response.status === 404) {
                console.error('Hall not found');
            } else {
                console.error('Failed to delete hall');
            }
        } catch (error) {
            console.error('Error:', error);
        }
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
                setHalls={setHalls}
                halls={halls}
            />
        </>
    );
}
