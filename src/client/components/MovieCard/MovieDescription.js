import React from 'react';

export default function MovieDescription({ title, description, duration, country }) {
    return (
        <div className="movie__description">
            <h2 className="movie__title">{title}</h2>
            <div className="movie__synopsis">{description}</div>
            <div className="movie__data">
                <span className="movie__data-duration">{duration}</span>
                <br />
                <span className="movie__data-origin">{country}</span>
            </div>
        </div>
    );
}
