/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';


export default function MovieSeancesHall({ filmId, id, title, seances, selectedDay, now }) {
    const navigate = useNavigate();

    function isSeanceDisabled(seanceTime) {
        return moment(`${selectedDay} ${seanceTime}`, 'DD.MM HH:mm').isBefore(now);
    }

    const handleClick = (time) => {
        navigate(`/hall`, { state: { filmId, selectedDay, time, hallId: id } });
    };

    return (
        <div className="movie-seances__hall">
            <h3 className="movie-seances__hall-title">{title}</h3>
            <ul className="movie-seances__list">
                {seances.map((time, index) => {
                    const isDisabled = isSeanceDisabled(time);
                    return (
                        <li
                            key={index}
                            className={`movie-seances__time-block ${isDisabled ? 'movie-seances__time-block__disabled' : ''}`}
                        >
                            <a className={`movie-seances__time ${isDisabled ? 'movie-seances__time__disabled' : ''}`} onClick={() => { !isDisabled && handleClick(time) }}>{time}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
