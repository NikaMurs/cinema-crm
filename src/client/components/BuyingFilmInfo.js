import React from 'react';

const BuyingFilmInfo = ({ filmTitle, hallTitle, selectedDay, time }) => {
    return (
        <div className="buying__info">
            <div className="buying__info-description">
                <h2 className="buying__info-title">{filmTitle}</h2>
                <p className="buying__info-start">Дата сеанса: {selectedDay} </p>
                <p className="buying__info-start">Время сеанса: {time}</p>
                <p className="buying__info-hall">{hallTitle}</p>
            </div>
            <div className="buying__info-hint">
                <p>Тапните дважды,<br />чтобы увеличить</p>
            </div>
        </div>
    );
};

export default BuyingFilmInfo;
