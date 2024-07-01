import React, { useState, useEffect } from 'react';
import HallManagement from '../components/mainComponents/HallManagement'
import HallConfiguration from '../components/mainComponents/HallConfiguration';
import PriceConfiguration from '../components/mainComponents/PriceConfiguration';
import SessionSchedule from '../components/mainComponents/SessionSchedule';
import OpenSales from '../components/mainComponents/OpenSales';

export default function AdminMainPage() {
    const [halls, setHalls] = useState([])

    // fetch запрос на получение инфы о залах
    useEffect(() => {
        setHalls([
            {
                id: 1,
                title: 'Зал 1',
                rows: [
                    ['disabled', 'disabled', 'disabled', 'disabled', 'disabled', 'standart', 'standart', 'disabled', 'disabled', 'disabled', 'disabled', 'disabled'],
                    ['disabled', 'disabled', 'disabled', 'disabled', 'standart', 'standart', 'standart', 'standart', 'disabled', 'disabled', 'disabled', 'disabled'],
                    ['disabled', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'disabled', 'disabled', 'disabled'],
                    ['standart', 'standart', 'standart', 'standart', 'vip', 'vip', 'vip', 'vip', 'standart', 'disabled', 'disabled', 'disabled'],
                    ['standart', 'standart', 'standart', 'standart', 'vip', 'vip', 'vip', 'vip', 'standart', 'disabled', 'disabled', 'disabled'],
                    ['standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'disabled', 'disabled', 'disabled'],
                    ['standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'disabled', 'disabled', 'disabled'],
                    ['standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart'],
                    ['standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart'],
                ],
                price: {
                    standart: 250,
                    vip: 350,
                },
                seances: {
                    1: {
                        time: '19:00',
                        filmId: 1,
                        filmTitle: "Звездные войны"
                    }
                },
                isActive: true,
            },
            {
                id: 2,
                title: 'Зал 2',
                rows: [
                    ['disabled', 'disabled', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'disabled', 'disabled'],
                    ['disabled', 'disabled', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'disabled', 'disabled'],
                    ['disabled', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'disabled'],
                    ['disabled', 'standart', 'standart', 'standart', 'vip', 'vip', 'vip', 'vip', 'standart', 'standart', 'disabled'],
                    ['standart', 'standart', 'standart', 'standart', 'vip', 'vip', 'vip', 'vip', 'standart', 'standart', 'standart'],
                    ['standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart'],
                    ['standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart'],
                    ['standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart'],
                ],
                price: {
                    standart: 250,
                    vip: 350,
                },
                seances: {
                    1: {
                        time: '19:00',
                        filmId: 1,
                        filmTitle: "Звездные войны"
                    }
                },
                isActive: true,
            },
        ])
    }, [])

    return (
        <main className="conf-steps">
            <HallManagement
                halls={halls}
                setHalls={setHalls}
            />
            <HallConfiguration
                halls={halls}
                setHalls={setHalls}
            />

            
            <PriceConfiguration />
            <SessionSchedule />
            <OpenSales />
        </main>
    );
}
