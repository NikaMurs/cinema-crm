import React from 'react';

export default function SeanceModal({ setShowModal, addSeance }) {
    return (
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
                                <input className="conf-step__input" type="time" name="time" placeholder="15:00" required />
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
    );
}
