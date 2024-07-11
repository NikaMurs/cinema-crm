import React from 'react';
import Chair from './Chair';

const Legend = ({ price }) => {
    return (
        <div className="buying-scheme__legend">
            <div className="col">
                <div className="buying-scheme__legend-price"><Chair type="standart" /> Свободно (<span className="buying-scheme__legend-value">{price.standart}</span>р)</div>
                <div className="buying-scheme__legend-price"><Chair type="vip" /> Свободно VIP (<span className="buying-scheme__legend-value">{price.vip}</span>р)</div>
            </div>
            <div className="col">
                <div className="buying-scheme__legend-price"><Chair type="taken" /> Занято</div>
                <div className="buying-scheme__legend-price"><Chair type="selected" /> Выбрано</div>
            </div>
        </div>
    );
};

export default Legend;
