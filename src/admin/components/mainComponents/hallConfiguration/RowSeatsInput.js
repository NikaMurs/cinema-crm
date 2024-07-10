import React from 'react';

export default function RowSeatsInput({ rows, seats, onRowsChange, onSeatsChange }) {
    const handleRowsChange = (e) => {
        let value = parseInt(e.target.value, 10);
        if (isNaN(value) || value < 0) value = 0;
        if (value > 20) value = 20;
        onRowsChange(value);
    };

    const handleSeatsChange = (e) => {
        let value = parseInt(e.target.value, 10);
        if (isNaN(value) || value < 0) value = 0;
        if (value > 20) value = 20;
        onSeatsChange(value);
    };

    return (
        <div className="conf-step__legend">
            <label className="conf-step__label">Рядов, шт
                <input type="text" className="conf-step__input" value={rows} onChange={handleRowsChange} />
            </label>
            <span className="multiplier">x</span>
            <label className="conf-step__label">Мест, шт
                <input type="text" className="conf-step__input" value={seats} onChange={handleSeatsChange} />
            </label>
        </div>
    );
}
