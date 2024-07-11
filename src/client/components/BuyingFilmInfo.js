import React from 'react';

const BuyingFilmInfo = ({ filmTitle, hallTitle, selectedDay, time }) => {
    return (
        <div className="buying__info">
            <div className="buying__info-description">
                <h2 className="buying__info-title">{filmTitle}</h2>
                <div className="buying__info-start">Дата сеанса: {selectedDay} </div>
                <div className="buying__info-start">Время сеанса: {time}</div>
                <div className="buying__info-hall">{hallTitle}</div>
            </div>
        </div>
    );
};

export default BuyingFilmInfo;
