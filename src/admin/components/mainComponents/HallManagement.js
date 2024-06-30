import React, { useState } from 'react';
import toggleMenu from '../../functions/toggleMenu';

export default function HallManagement({halls, setHalls}) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [newHallName, setNewHallName] = useState('');

    // fetch на создание нового зала
    const handleAddHall = (e) => {
        e.preventDefault();
        if (newHallName.trim() !== '') {
            const newHall = {
                id: halls.length ? halls[halls.length - 1].id + 1 : 1,
                title: newHallName.trim(),
                rows: [
                    ['standart'],
                ],
                price: {
                    standart: 0,
                    vip: 0,
                },
                seances: {},
                isActive: false,
            };
            setHalls([...halls, newHall]);
            setNewHallName('');
            setIsPopupOpen(false);
        }
    };

    // fetch на удаление зала
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
                    <p className="conf-step__paragraph">Доступные залы:</p>
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

            {
                isPopupOpen && (
                    <div className="popup active">
                        <div className="popup__container">
                            <div className="popup__content">
                                <div className="popup__header">
                                    <h2 className="popup__title">
                                        Добавление зала
                                        <a className="popup__dismiss" href="#" onClick={() => setIsPopupOpen(false)}>
                                            &#10006;
                                        </a>
                                    </h2>
                                </div>
                                <div className="popup__wrapper">
                                    <form onSubmit={handleAddHall}>
                                        <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                                            Название зала
                                            <input
                                                className="conf-step__input"
                                                type="text"
                                                placeholder="Например, «Зал 1»"
                                                name="name"
                                                value={newHallName}
                                                onChange={(e) => setNewHallName(e.target.value)}
                                                required
                                            />
                                        </label>
                                        <div className="conf-step__buttons text-center">
                                            <input
                                                type="submit"
                                                value="Добавить зал"
                                                className="conf-step__button conf-step__button-accent"
                                                data-event="hall_add"
                                            />
                                            <button
                                                className="conf-step__button conf-step__button-regular"
                                                type="button"
                                                onClick={() => setIsPopupOpen(false)}
                                            >
                                                Отменить
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}
