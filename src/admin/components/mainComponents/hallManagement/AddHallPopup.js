import React, { useState } from 'react';

export default function AddHallPopup({ isOpen, onClose, halls, setHalls }) {
    const [newHallName, setNewHallName] = useState('');

    const handleAddHall = async (e) => {
        e.preventDefault();

        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: newHallName,
                    rows: [],
                    price: {
                        standart: 0,
                        vip: 0,
                    },
                    isActive: false,
                })
            };

            const response = await fetch(`${process.env.REACT_APP_URL}/halls`, requestOptions);
            let result = await response.json();
            result.seances = [];


            if (!response.ok) {
                throw new Error('Ошибка создания зала');
            } else {
                setHalls([...halls, result]);
            }

            setNewHallName('');
            onClose();
        } catch (error) {
            console.error('Ошибка создания зала:', error.message);
        }
    };


    return isOpen ? (
        <div className="popup active">
            <div className="popup__container">
                <div className="popup__content">
                    <div className="popup__header">
                        <h2 className="popup__title">
                            Добавление зала
                            <a className="popup__dismiss" href="#" onClick={onClose}>
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
                                    onClick={onClose}
                                >
                                    Отменить
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
}
