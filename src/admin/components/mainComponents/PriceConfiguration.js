import React, { useEffect, useState } from 'react';
import HallSelector from '../HallSelector';
import SubmitButtons from '../SubmitButtons';

export default function PriceConfiguration({ halls, setHalls }) {
    const [selectedHall, setSelectedHall] = useState(0);
    const [savedHallState, setSavedHallState] = useState(undefined);

    const [standartPrice, setStandartPrice] = useState(undefined);
    const [vipPrice, setVipPrice] = useState(undefined);

    useEffect(() => {
        if (halls[selectedHall]) {
            if (standartPrice === undefined) {
                setStandartPrice(halls[selectedHall]?.price.standart);
            }
            if (vipPrice === undefined) {
                setVipPrice(halls[selectedHall]?.price.vip);
            }
            if (!savedHallState) {
                setSavedHallState(JSON.parse(JSON.stringify(halls[selectedHall])));
            }
        }
    }, [halls]);

    useEffect(() => {
        if (halls[selectedHall]) {
            setStandartPrice(halls[selectedHall]?.price.standart);
            setVipPrice(halls[selectedHall]?.price.vip);
            setSavedHallState(JSON.parse(JSON.stringify(halls[selectedHall])));
        }
    }, [selectedHall]);

    const handleChangeStandart = (e) => {
        let value = parseInt(e.target.value, 10);
        if (isNaN(value) || value < 0) value = 0;
        setStandartPrice(value);

        setHalls((prevHallState) => {
            const newHallState = [...prevHallState];
            newHallState[selectedHall] = {
                ...newHallState[selectedHall],
                price: {
                    ...newHallState[selectedHall].price,
                    standart: value,
                },
            };
            return newHallState;
        });
    };

    const handleChangeVip = (e) => {
        let value = parseInt(e.target.value, 10);
        if (isNaN(value) || value < 0) value = 0;
        setVipPrice(value);

        setHalls((prevHallState) => {
            const newHallState = [...prevHallState];
            newHallState[selectedHall] = {
                ...newHallState[selectedHall],
                price: {
                    ...newHallState[selectedHall].price,
                    vip: value,
                },
            };
            return newHallState;
        });
    };

    const handleCancel = () => {
        setHalls((prevHallState) => {
            const newHallState = [...prevHallState];
            newHallState[selectedHall] = JSON.parse(JSON.stringify(savedHallState));
            return newHallState;
        });
        setStandartPrice(savedHallState.price.standart);
        setVipPrice(savedHallState.price.vip);
    };

    const handleSave = () => {
        // fetch запрос на сохранение
        setSavedHallState(JSON.parse(JSON.stringify(halls[selectedHall])));
    };

    return (
        <section className="conf-step">
            <header className="conf-step__header conf-step__header_opened">
                <h2 className="conf-step__title">Конфигурация цен</h2>
            </header>
            <div className="conf-step__wrapper">
                <HallSelector
                    type="price"
                    halls={halls}
                    selectedHall={selectedHall}
                    setSelectedHall={setSelectedHall}
                    handleCancel={handleCancel}
                />
                <p className="conf-step__paragraph">Установите цены для типов кресел:</p>
                <div className="conf-step__legend">
                    <label className="conf-step__label">Цена, рублей<input type="text" className="conf-step__input" value={standartPrice} onChange={handleChangeStandart} /></label>
                    <span className="multiplier">VIP кресло</span>
                    <label className="conf-step__label">Цена, рублей<input type="text" className="conf-step__input" value={vipPrice} onChange={handleChangeVip} /></label>
                </div>

                <SubmitButtons
                    handleCancel={handleCancel}
                    handleSave={handleSave} />
            </div>
        </section>
    );
}
