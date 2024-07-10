import React, { useState } from 'react';

export default function AddHallPopup({ isOpen, onClose, onAddHall }) {
    const [newHallName, setNewHallName] = useState('');

    const handleAddHall = (e) => {
        e.preventDefault();
        onAddHall(newHallName);
        setNewHallName('');
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
