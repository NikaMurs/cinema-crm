import React from 'react';

export default function DeleteFilmModal({ filmToDelete, handleDeleteFilm, setFilmToDelete }) {
    return (
        <div className="popup active">
            <div className="popup__container">
                <div className="popup__content">
                    <div className="popup__header">
                        <h2 className="popup__title">
                            Удаление фильма
                            <a className="popup__dismiss" href="#" onClick={(e) => { e.preventDefault(); setFilmToDelete(null); }}>✖</a>
                        </h2>
                    </div>
                    <div className="popup__wrapper">
                        <form onSubmit={(e) => { e.preventDefault(); handleDeleteFilm(); }} method="post" acceptCharset="utf-8">
                            <p className="conf-step__paragraph">Вы действительно хотите удалить фильм <span> "<b>{filmToDelete.title}</b>"</span>?</p>
                            <div className="conf-step__buttons text-center">
                                <input type="submit" value="Удалить" className="conf-step__button conf-step__button-accent" data-event="film_del" data-film-id={filmToDelete.id} />
                                <button className="conf-step__button conf-step__button-regular" type="button" onClick={() => setFilmToDelete(null)}>Отменить</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
