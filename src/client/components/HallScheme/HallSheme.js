import React from 'react';
import Row from './Row';
import Legend from './Legend';

const HallScheme = ({ rows, price, selectedChairs, setSelectedChairs, totalPrice, setTotalPrice }) => {

    const handleSelect = (row, number, isSelected, type) => {
        const chairId = `${row}/${number}`;
        if (isSelected) {
            setSelectedChairs([...selectedChairs, chairId]);
            setTotalPrice(totalPrice + price[type]);
        } else {
            setSelectedChairs(selectedChairs.filter(id => id !== chairId));
            setTotalPrice(totalPrice - price[type]);
        }
    };


    return (
        <div className="buying-scheme">
            <div className="buying-scheme__wrapper">
                {rows?.map((chairs, index) => (
                    <Row key={index} chairs={chairs} rowIndex={index} handleSelect={handleSelect} />
                ))}
            </div>
            <Legend price={price} />
        </div>
    );
};

export default HallScheme;
