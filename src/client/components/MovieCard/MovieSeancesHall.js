import React from 'react';
import moment from 'moment';


export default function MovieSeancesHall({ title, seances, now }) {
    function isSeanceDisabled(seanceTime) {
        return moment(seanceTime, 'HH:mm').isBefore(now);
    }

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
                            <a className={`movie-seances__time ${isDisabled ? 'movie-seances__time__disabled' : ''}`} href="/hall">{time}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
