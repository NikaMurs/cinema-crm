import React from 'react';

export default function SessionSchedule() {
    return (
        <section className="conf-step">
            <header className="conf-step__header conf-step__header_opened">
                <h2 className="conf-step__title">Сетка сеансов</h2>
            </header>
            <div className="conf-step__wrapper">
                <p className="conf-step__paragraph">Выберите зал для конфигурации:</p>
                <ul className="conf-step__selectors-box">
                    <li><input type="radio" className="conf-step__radio" name="session-hall" value="Зал 1" checked /><span className="conf-step__selector">Зал 1</span></li>
                    <li><input type="radio" className="conf-step__radio" name="session-hall" value="Зал 2" /><span className="conf-step__selector">Зал 2</span></li>
                </ul>
                <div className="conf-step__seances">
                    <div className="conf-step__seances-hall">
                        <h3 className="conf-step__seances-title">Зал 1</h3>
                        <div className="conf-step__seances-timeline">
                            <div className="conf-step__seances-movie" style={{ width: "90px" }}>
                                <p className="conf-step__seances-movie-title">Звёздные войны</p>
                                <p className="conf-step__seances-movie-start">Начало: 10:00</p>
                            </div>
                            <div className="conf-step__seances-movie" style={{ width: "90px" }}>
                                <p className="conf-step__seances-movie-title">Звёздные войны</p>
                                <p className="conf-step__seances-movie-start">Начало: 12:00</p>
                            </div>
                        </div>
                    </div>
                    <div className="conf-step__seances-hall">
                        <h3 className="conf-step__seances-title">Зал 2</h3>
                        <div className="conf-step__seances-timeline">
                            <div className="conf-step__seances-movie" style={{ width: "90px" }}>
                                <p className="conf-step__seances-movie-title">Звёздные войны</p>
                                <p className="conf-step__seances-movie-start">Начало: 11:00</p>
                            </div>
                            <div className="conf-step__seances-movie" style={{ width: "90px" }}>
                                <p className="conf-step__seances-movie-title">Звёздные войны</p>
                                <p className="conf-step__seances-movie-start">Начало: 13:00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <fieldset className="conf-step__buttons text-center">
                    <button className="conf-step__button conf-step__button-regular">Отмена</button>
                    <input type="submit" value="Сохранить" className="conf-step__button conf-step__button-accent" />
                </fieldset>
            </div>
        </section>
    );
}
