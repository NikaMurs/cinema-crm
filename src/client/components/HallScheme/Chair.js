import React, { useState } from 'react';

const Chair = ({ type, row, number, onSelect }) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        if (type === 'standart' || type === 'vip') {
            setIsSelected(!isSelected);
            onSelect(row, number, !isSelected, type);
        }
    };

    return (
        <span
            className={`buying-scheme__chair buying-scheme__chair_${type} ${isSelected ? 'buying-scheme__chair_selected' : ''}`}
            onClick={handleClick}
        />
    )
};

export default Chair;
