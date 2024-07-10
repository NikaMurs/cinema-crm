import React from 'react';

export default function PriceInput({ label, value, onChange }) {
    const handleChange = (e) => {
        let newValue = parseInt(e.target.value, 10);
        if (isNaN(newValue) || newValue < 0) newValue = 0;
        onChange(newValue);
    };

    return (
        <label className="conf-step__label">
            {label}
            <input
                type="text"
                className="conf-step__input"
                value={value}
                onChange={handleChange}
            />
        </label>
    );
}
