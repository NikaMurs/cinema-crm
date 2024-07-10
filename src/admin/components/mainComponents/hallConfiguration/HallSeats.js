import React from 'react';

export default function HallSeats({ hall, onSeatClick }) {
    return (
        <div className="conf-step__hall">
            <div className="conf-step__hall-wrapper">
                {hall?.rows.map((row, rowIndex) => (
                    <div key={`hallConfig_row_${rowIndex}`} className="conf-step__row">
                        {row.map((seat, seatIndex) => (
                            <span
                                key={`hallConfig_row_${rowIndex}_seat_${seatIndex}`}
                                onClick={() => onSeatClick(rowIndex, seatIndex)}
                                className={`conf-step__chair conf-step__chair_${seat}`}
                            ></span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
