import React from 'react';
import Chair from './Chair';

const Legend = ({ price }) => {
    return (
        <div className="buying-scheme__legend">
            <div className="col">
                <p className="buying-scheme__legend-price"><Chair type="standart" /> Свободно (<span className="buying-scheme__legend-value">{price.standart}</span>р)</p>
                <p className="buying-scheme__legend-price"><Chair type="vip" /> Свободно VIP (<span className="buying-scheme__legend-value">{price.vip}</span>р)</p>
            </div>
            <div className="col">
                <p className="buying-scheme__legend-price"><Chair type="taken" /> Занято</p>
                <p className="buying-scheme__legend-price"><Chair type="selected" /> Выбрано</p>
            </div>
        </div>
    );
};

export default Legend;
