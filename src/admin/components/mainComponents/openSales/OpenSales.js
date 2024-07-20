import React, { useState } from 'react';
import HallSelector from '../../HallSelector';
import toggleMenu from '../../../functions/toggleMenu';

const OpenSales = ({ halls, setHalls }) => {
    const [selectedHall, setSelectedHall] = useState(0);

    const toggleSales = async () => {
        try {
            const hallData = JSON.parse(JSON.stringify(halls[selectedHall]));
            hallData.isActive = !hallData.isActive;

            const response = await fetch(`${process.env.REACT_APP_URL}/halls/${halls[selectedHall].id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(hallData)
            });

            if (response.ok) {
                setHalls(prevHalls => {
                    const newHalls = [...prevHalls];
                    newHalls[selectedHall] = {
                        ...newHalls[selectedHall],
                        isActive: hallData.isActive,
                    };
                    return newHalls;
                });
            } else {
                throw new Error('Ошибка при сохранении данных');
            }
        } catch (error) {
            console.error('Ошибка при сохранении:', error);
        }
    };


    return (
        <section className="conf-step">
            <header className="conf-step__header conf-step__header_opened" onClick={toggleMenu}>
                <h2 className="conf-step__title">Открыть продажи</h2>
            </header>
            <div className="conf-step__wrapper">
                <HallSelector
                    type="openSales"
                    halls={halls}
                    selectedHall={selectedHall}
                    setSelectedHall={setSelectedHall}
                    handleCancel={() => { /* handle cancel logic */ }}
                />
                <div className="conf-step__wrapper text-center" style={{ paddingLeft: '42px' }}>
                    <div className={`conf-step__paragraph ${halls[selectedHall]?.isActive ? 'text-green' : 'text-red'}`}>
                        {halls[selectedHall]?.isActive ? 'Продажа открыта' : 'Продажа закрыта'}
                    </div>
                    <button
                        className="conf-step__button conf-step__button-accent"
                        onClick={toggleSales}
                    >
                        {halls[selectedHall]?.isActive ? 'Закрыть продажу билетов' : 'Открыть продажу билетов'}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OpenSales;
