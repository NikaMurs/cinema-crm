import React, { useState, useEffect } from 'react';
import HallManagement from '../components/mainComponents/HallManagement'
import HallConfiguration from '../components/mainComponents/HallConfiguration';
import PriceConfiguration from '../components/mainComponents/PriceConfiguration';
import SessionSchedule from '../components/mainComponents/SessionSchedule';
import OpenSales from '../components/mainComponents/OpenSales';
import { duration } from 'moment';

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
                seances: [
                    {
                        time: '0:00',
                        filmId: 1,
                        filmTitle: "Звездные войны",
                        duration: '120m'
                    },
                    {
                        time: '12:00',
                        filmId: 2,
                        filmTitle: 'Какой то фильм',
                        duration: '180m'
                    }
                ],
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
                    standart: 2500,
                    vip: 3500,
                },
                seances: [
                    {
                        time: '19:30',
                        filmId: 1,
                        filmTitle: "Звездные войны",
                        duration: '120m'
                    }
                ],
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
            <PriceConfiguration
                halls={halls}
                setHalls={setHalls}
            />
            <SessionSchedule
                halls={halls}
                setHalls={setHalls}
            />
            <OpenSales />
        </main>
    );
}
