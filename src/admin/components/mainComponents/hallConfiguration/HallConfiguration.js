import React, { useEffect, useState } from 'react';
import HallSelector from '../../HallSelector';
import SubmitButtons from '../../SubmitButtons';
import toggleMenu from '../../../functions/toggleMenu';
import RowSeatsInput from './RowSeatsInput';
import SeatLegend from './SeatLegend';
import HallSeats from './HallSeats';

export default function HallConfiguration({ halls, setHalls }) {
    const [selectedHall, setSelectedHall] = useState(0);
    const [rows, setRows] = useState(0);
    const [seats, setSeats] = useState(0);
    const [savedHallState, setSavedHallState] = useState(0);

    useEffect(() => {
        if (halls[selectedHall]) {
            if (!rows) {
                setRows(halls[selectedHall]?.rows?.length);
            }
            if (!seats) {
                setSeats(halls[selectedHall]?.rows[0]?.length);
            }
            if (!savedHallState) {
                setSavedHallState(JSON.parse(JSON.stringify(halls[selectedHall])));
            }
        }
    }, [halls])

    useEffect(() => {
        setRows(halls[selectedHall]?.rows?.length);
        setSeats(halls[selectedHall]?.rows[0]?.length);
        if (halls[selectedHall]) {
            setSavedHallState(JSON.parse(JSON.stringify(halls[selectedHall])));
        }
    }, [selectedHall])

    const handleChangeRows = (newRows) => {
        setRows(newRows);
        updateHallRows(newRows, seats);
    };

    const handleChangeSeats = (newSeats) => {
        setSeats(newSeats);
        updateHallRows(rows, newSeats);
    };

    const updateHallRows = (newRows, newSeats) => {
        setHalls((prevHalls) => {
            const updatedHalls = [...prevHalls];
            const updatedHall = { ...updatedHalls[selectedHall] };
            const newRowsArray = Array.from({ length: newRows }, () =>
                Array(newSeats).fill('standart')
            );
            updatedHall.rows = newRowsArray;
            updatedHalls[selectedHall] = updatedHall;
            return updatedHalls;
        });
    };

    const handleClickSeat = (rowIndex, seatIndex) => {
        setHalls((prevHalls) => {
            const updatedHalls = [...prevHalls];
            const updatedHall = { ...updatedHalls[selectedHall] };
            const updatedRows = [...updatedHall.rows];
            updatedRows[rowIndex][seatIndex] = getNextSeatState(updatedRows[rowIndex][seatIndex]);
            updatedHall.rows = updatedRows;
            updatedHalls[selectedHall] = updatedHall;
            return updatedHalls;
        });
    };

    const handleCancel = () => {
        setHalls((prevHalls) => {
            const updatedHalls = [...prevHalls];
            updatedHalls[selectedHall] = JSON.parse(JSON.stringify(savedHallState));
            return updatedHalls;
        });
        setRows(savedHallState.rows?.length);
        setSeats(savedHallState.rows[0]?.length);
    };

    const handleSave = async () => {
        try {
            const hallData = JSON.parse(JSON.stringify(halls[selectedHall]));

            const response = await fetch(`${process.env.REACT_APP_URL}/halls/${halls[selectedHall].id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(hallData)
            });

            if (!response.ok) {
                throw new Error('Ошибка при сохранении данных');
            }

            const updatedHall = await response.json();

            setSavedHallState(updatedHall);
        } catch (error) {
            console.error('Ошибка при сохранении:', error);
        }
    };


    const getNextSeatState = (currentSeatState) => {
        switch (currentSeatState) {
            case 'disabled':
                return 'standart';
            case 'standart':
                return 'vip';
            case 'vip':
                return 'disabled';
            default:
                return currentSeatState;
        }
    };

    return (
        <section className="conf-step">
            <header className="conf-step__header conf-step__header_opened" onClick={toggleMenu}>
                <h2 className="conf-step__title">Конфигурация залов</h2>
            </header>
            <div className="conf-step__wrapper">
                <HallSelector
                    type="config"
                    halls={halls}
                    selectedHall={selectedHall}
                    setSelectedHall={setSelectedHall}
                    handleCancel={handleCancel}
                />

                <div className="conf-step__paragraph">Укажите количество рядов и максимальное количество кресел в ряду:</div>
                <RowSeatsInput
                    rows={rows}
                    seats={seats}
                    onRowsChange={handleChangeRows}
                    onSeatsChange={handleChangeSeats}
                />

                <SeatLegend />

                <HallSeats
                    hall={halls[selectedHall]}
                    onSeatClick={handleClickSeat}
                />

                <SubmitButtons handleCancel={handleCancel} handleSave={handleSave} />
            </div>
        </section>
    );
}
