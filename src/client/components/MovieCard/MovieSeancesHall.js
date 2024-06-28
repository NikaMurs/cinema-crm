/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userActions } from '../../../store/userReducer';


export default function MovieSeancesHall({ filmInfo, hallInfo, title, seances, selectedDay, now }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function isSeanceDisabled(seanceTime) {
        return moment(`${selectedDay} ${seanceTime}`, 'DD.MM HH:mm').isBefore(now);
    }

    const handleClick = (time) => {
        dispatch(userActions.setSelectedTime(time));
        dispatch(userActions.setSelectedHall(hallInfo));
        dispatch(userActions.setSelectedFilm(filmInfo));
        navigate(`/hall`);
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
