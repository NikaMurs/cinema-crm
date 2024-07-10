import React, { useState } from 'react';
import poster1 from '../../img/poster.png';

export default function FilmsList({ films, setFilms }) {
    const [showModal, setShowModal] = useState(false);
    const [filmToDelete, setFilmToDelete] = useState(null);
    const [posterImage, setPosterImage] = useState(null);
    const [newFilm, setNewFilm] = useState({
        title: '',
        duration: '',
        filmDesription: '',
        country: '',
        poster: ''
    });

    const handleAddFilm = (event) => {
        event.preventDefault();
        setFilms([...films, { ...newFilm, id: films.length + 1, poster: posterImage }]);
        setNewFilm({
            title: '',
            duration: '',
            filmDesription: '',
            country: '',
            poster: ''
        });
        setPosterImage(null)
        setShowModal(false);
    };

    const handleCancel = (event) => {
        event.preventDefault();
        setNewFilm({
            title: '',
            duration: '',
            filmDesription: '',
            country: '',
            poster: ''
        });
        setPosterImage(null)
        setShowModal(false);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewFilm({ ...newFilm, [name]: value });
    };

    const openDeleteModal = (film) => {
        setFilmToDelete(film);
    };

    const handleDeleteFilm = () => {
        setFilms(films.filter(film => film.id !== filmToDelete.id));
        setFilmToDelete(null);
    };

    const handleDragStart = (event, filmId) => {
        event.dataTransfer.setData("filmId", filmId);
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPosterImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <div className="conf-step__movies">
                {films.map((film) => (
                    <div
                        className="conf-step__movie"
                        draggable="true"
                        data-film-id={film.id}
                        key={film.id}
                        onDragStart={(e) => handleDragStart(e, film.id)}
                    >
                        <img className="conf-step__movie-poster" draggable="false" alt="poster" src={film.poster} width="100" height="100" />
                        <h3 className="conf-step__movie-title">{film.title}</h3>
                        <p className="conf-step__movie-duration">{film.duration}</p>
                        <a href="#" draggable="false" onClick={(e) => { e.preventDefault(); }}><button
                            className="conf-step__button conf-step__button-trash"
                            data-film-id={film.id}
                            data-film-name={film.title}
                            onClick={(e) => openDeleteModal(film)}
                        ></button></a>
                    </div>
                ))}
            </div>

            <p className="conf-step__paragraph">
                <a href="#" onClick={(e) => { e.preventDefault(); setShowModal(true) }}><button className="conf-step__button conf-step__button-accent button__add-movie">Добавить фильм</button></a>
            </p>

            {showModal && (
                <div className="popup active">
                    <div className="popup__container">
                        <div className="popup__content">
                            <div className="popup__header">
                                <h2 className="popup__title">
                                    Добавление фильма
                                    <a className="popup__dismiss" href="#" onClick={(e) => { handleCancel(e) }}>✖</a>
                                </h2>
                            </div>
                            <div className="popup__wrapper">
                                <form onSubmit={handleAddFilm} method="post" acceptCharset="utf-8">
                                    <div className="popup__container">
                                        <div className="popup__poster"></div>
                                        {posterImage && <img src={posterImage} style={{ maxWidth: '200px', objectFit: 'cover', marginRight: '10px' }} alt="Preview" />}
                                        <div className="popup__form">
                                            <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                                                Название фильма
                                                <input className="conf-step__input" type="text" placeholder="Поймай меня если сможешь" name="title" value={newFilm.title} onChange={handleInputChange} required />
                                            </label>
                                            <label className="conf-step__label conf-step__label-fullsize" htmlFor="duration">
                                                Продолжительность фильма (мин.)
                                                <input className="conf-step__input" type="text" name="duration" placeholder="120" value={newFilm.duration} onChange={handleInputChange} required />
                                            </label>
                                            <label className="conf-step__label conf-step__label-fullsize" htmlFor="description">
                                                Описание фильма
                                                <textarea className="conf-step__input" name="filmDesription" placeholder="Описание фильма..." value={newFilm.filmDesription} onChange={handleInputChange} required></textarea>
                                            </label>
                                            <label className="conf-step__label conf-step__label-fullsize" htmlFor="country">
                                                Страна
                                                <input className="conf-step__input" type="text" name="country" placeholder="США" value={newFilm.country} onChange={handleInputChange} required />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="conf-step__buttons text-center">
                                        <input type="submit" value="Добавить фильм" className="conf-step__button conf-step__button-accent" data-event="film_add" />
                                        <input type="button" value="Загрузить постер" className="conf-step__button conf-step__button-accent" onClick={() => document.getElementById('fileInput').click()} />
                                        <button className="conf-step__button conf-step__button-regular" type="button" onClick={(e) => handleCancel(e)}>Отменить</button>
                                        <input type="file" id="fileInput" style={{ display: 'none' }} accept="image/*" onChange={(e) => handleFileUpload(e)} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {filmToDelete && (
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
            )}

        </div>
    );
};
