import React, { useEffect, useState } from 'react';
import HallSelector from '../HallSelector';
import SubmitButtons from '../SubmitButtons';

export default function HallConfiguration({ halls, setHalls }) {
    const [selectedHall, setSelectedHall] = useState(0);
    const [rows, setRows] = useState(undefined);
    const [seats, setSeats] = useState(undefined);
    const [savedHallState, setSavedHallState] = useState(undefined);

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
        setSavedHallState(halls[selectedHall])
    }, [selectedHall])


    const handleChangeRows = (e) => {
        let value = parseInt(e.target.value, 10);
        if (isNaN(value) || value < 0) value = 0;
        if (value > 20) value = 20;
        setRows(value);

        setHalls((prevHallState) => {
            const newHallState = [...prevHallState];
            const newHall = { ...newHallState[selectedHall] };

            if (value >= 0) {
                const seatsArr = [];
                for (let i = 0; i < value; i++) {
                    const row = [];
                    for (let j = 0; j < seats; j++) {
                        row.push('standart');
                    }
                    seatsArr.push(row);
                }
                newHall.rows = seatsArr;
            }

            newHallState[selectedHall] = newHall;
            return newHallState;
        });
    }

    const handleChangeSeats = (e) => {
        let value = parseInt(e.target.value, 10);
        if (isNaN(value) || value < 0) value = 0;
        if (value > 20) value = 20;
        setSeats(value);

        setHalls((prevHallState) => {
            const newHallState = [...prevHallState];
            const newHall = { ...newHallState[selectedHall] };

            if (value >= 0) {
                const seatsArr = [];
                for (let i = 0; i < rows; i++) {
                    const row = [];
                    for (let j = 0; j < value; j++) {
                        row.push('standart');
                    }
                    seatsArr.push(row);
                }
                newHall.rows = seatsArr;
            }

            newHallState[selectedHall] = newHall;
            return newHallState;
        });
    }

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

    const updateRowSeats = (row, seatIndex) => {
        return row.map((seat, index) => {
            if (index === seatIndex) {
                return getNextSeatState(seat);
            }
            return seat;
        });
    };

    const updateHallRows = (rows, rowIndex, seatIndex) => {
        return rows.map((row, index) => {
            if (index === rowIndex) {
                return updateRowSeats(row, seatIndex);
            }
            return row;
        });
    };

    const updateHallState = (halls, hallIndex, rowIndex, seatIndex) => {
        return halls.map((hall, index) => {
            if (index === hallIndex) {
                return { ...hall, rows: updateHallRows(hall.rows, rowIndex, seatIndex) };
            }
            return hall;
        });
    };

    const handleClickSeat = (row, seat) => {
        setHalls((prevHallState) => {
            return updateHallState(prevHallState, selectedHall, row, seat);
        });
    };

    const handleCancel = () => {
        setHalls((prevHallState) => {
            const newHallState = [...prevHallState];

            newHallState[selectedHall] = savedHallState;
            return newHallState;
        });
        setRows(savedHallState.rows?.length);
        setSeats(savedHallState.rows[0]?.length);
    }

    const handleSave = () => {
        // fetch запрос на сохранение
        setSavedHallState(JSON.parse(JSON.stringify(halls[selectedHall])));
    }

    return (
        <section className="conf-step">
            <header className="conf-step__header conf-step__header_opened">
                <h2 className="conf-step__title">Конфигурация залов</h2>
            </header>
            <div className="conf-step__wrapper">
                <HallSelector
                    type="congif"
                    halls={halls}
                    selectedHall={selectedHall}
                    setSelectedHall={setSelectedHall}
                    handleCancel={handleCancel}
                />

                <p className="conf-step__paragraph">Укажите количество рядов и максимальное количество кресел в ряду:</p>
                <div className="conf-step__legend">
                    <label className="conf-step__label">Рядов, шт<input type="text" className="conf-step__input" value={rows} onChange={handleChangeRows} /></label>
                    <span className="multiplier">x</span>
                    <label className="conf-step__label">Мест, шт<input type="text" className="conf-step__input" value={seats} onChange={handleChangeSeats} /></label>
                </div>
                <p className="conf-step__paragraph">Теперь вы можете указать типы кресел на схеме зала:</p>
                <div className="conf-step__legend">
                    <span className="conf-step__chair conf-step__chair_standart"></span> — обычные кресла
                    <span className="conf-step__chair conf-step__chair_vip"></span> — VIP кресла
                    <span className="conf-step__chair conf-step__chair_disabled"></span> — заблокированные (нет кресла)
                    <p className="conf-step__hint">Чтобы изменить вид кресла, нажмите по нему левой кнопкой мыши</p>
                </div>

                <div className="conf-step__hall">
                    <div className="conf-step__hall-wrapper">
                        {halls[selectedHall]?.rows.map((el, ind) => {
                            return <div key={`hallCongif_rows_${ind}`} className="conf-step__row">
                                {halls[selectedHall]?.rows[ind].map((el, indd) => {
                                    return <>
                                        <span key={`hallCongif_row_${ind}_${indd}`} onClick={() => { handleClickSeat(ind, indd) }} className={`conf-step__chair conf-step__chair_${el}`}></span>
                                    </>
                                })}
                            </div>
                        })}
                    </div>
                </div>

                <SubmitButtons
                    handleCancel={handleCancel}
                    handleSave={handleSave} />
            </div>
        </section>
    );
}
