import React from 'react';
import Row from './Row';
import Legend from './Legend';

// const rows = [
//     ['disabled', 'disabled', 'disabled', 'disabled', 'disabled', 'standart', 'standart', 'disabled', 'disabled', 'disabled', 'disabled', 'disabled'],
//     ['disabled', 'disabled', 'disabled', 'disabled', 'taken', 'standart', 'standart', 'standart', 'disabled', 'disabled', 'disabled', 'disabled'],
//     ['disabled', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'disabled', 'disabled', 'disabled'],
//     ['standart', 'standart', 'standart', 'standart', 'standart', 'vip', 'vip', 'standart', 'standart', 'disabled', 'disabled', 'disabled'],
//     ['standart', 'standart', 'standart', 'standart', 'vip', 'vip', 'vip', 'vip', 'standart', 'disabled', 'disabled', 'disabled'],
//     ['standart', 'standart', 'standart', 'standart', 'vip', 'taken', 'taken', 'taken', 'standart', 'disabled', 'disabled', 'disabled'],
//     ['standart', 'standart', 'standart', 'standart', 'standart', 'selected', 'selected', 'standart', 'standart', 'disabled', 'disabled', 'disabled'],
//     ['standart', 'taken', 'standart', 'taken', 'standart', 'taken', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart'],
//     ['standart', 'standart', 'standart', 'standart', 'standart', 'taken', 'taken', 'taken', 'standart', 'standart', 'standart', 'standart'],
// ];

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
                {rows.map((chairs, index) => (
                    <Row key={index} chairs={chairs} rowIndex={index} handleSelect={handleSelect} />
                ))}
            </div>
            <Legend price={price} />
        </div>
    );
};

export default HallScheme;
