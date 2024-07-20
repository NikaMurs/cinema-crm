import React, { useEffect, useState } from 'react';
import HallSelector from '../../HallSelector';
import SubmitButtons from '../../SubmitButtons';
import toggleMenu from '../../../functions/toggleMenu';
import PriceInput from './PriceInput';

export default function PriceConfiguration({ halls, setHalls }) {
    const [selectedHall, setSelectedHall] = useState(0);
    const [savedHallState, setSavedHallState] = useState(0);

    const [standartPrice, setStandartPrice] = useState(0);
    const [vipPrice, setVipPrice] = useState(0);

    useEffect(() => {
        if (halls[selectedHall]) {
            if (!standartPrice) {
                setStandartPrice(halls[selectedHall]?.price.standart);
            }
            if (!vipPrice) {
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

    const handleChangeStandart = (value) => {
        setStandartPrice(value);
        updateHallPrice('standart', value);
    };

    const handleChangeVip = (value) => {
        setVipPrice(value);
        updateHallPrice('vip', value);
    };

    const updateHallPrice = (type, value) => {
        setHalls((prevHalls) => {
            const updatedHalls = [...prevHalls];
            const updatedHall = { ...updatedHalls[selectedHall] };
            updatedHall.price = {
                ...updatedHall.price,
                [type]: value,
            };
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
        setStandartPrice(savedHallState.price.standart);
        setVipPrice(savedHallState.price.vip);
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

    return (
        <section className="conf-step">
            <header className="conf-step__header conf-step__header_opened" onClick={toggleMenu}>
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
                <div className="conf-step__paragraph">Установите цены для типов кресел:</div>
                <div className="conf-step__legend">
                    <PriceInput
                        label="Цена, рублей"
                        value={standartPrice}
                        onChange={handleChangeStandart}
                    />
                    <span className="multiplier">VIP кресло</span>
                    <PriceInput
                        label="Цена, рублей"
                        value={vipPrice}
                        onChange={handleChangeVip}
                    />
                </div>
                <SubmitButtons handleCancel={handleCancel} handleSave={handleSave} />
            </div>
        </section>
    );
}
