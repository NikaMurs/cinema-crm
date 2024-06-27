import React from 'react';
import Chair from './Chair';

const Row = ({ chairs, rowIndex, handleSelect }) => {

    return (
        <div className="buying-scheme__row">
            {chairs.map((type, index) => (
                <Chair key={index}
                    type={type}
                    row={rowIndex + 1}
                    number={index + 1}
                    onSelect={handleSelect} />
            ))}
        </div>
    );
};

export default Row;
