import React, { useState, useEffect } from 'react';
import HallManagement from '../components/mainComponents/HallManagement'
import HallConfiguration from '../components/mainComponents/HallConfiguration';
import PriceConfiguration from '../components/mainComponents/PriceConfiguration';
import SessionSchedule from '../components/mainComponents/SessionSchedule';
import OpenSales from '../components/mainComponents/OpenSales';

import poster1 from '../img/poster.png'

export default function AdminMainPage() {
    const [halls, setHalls] = useState([]);
    const [films, setFilms] = useState([]);

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

    // fetch запрос на получение инфы о фильмах
    useEffect(() => {
        setFilms([
            {
                id: 1,
                title: "Звездные войны",
                duration: '120m',
                filmDesription: "Супер интересный фильм про звездные войны",
                country: 'США',
                poster: poster1,
            },
            {
                id: 2,
                title: 'Какой то фильм',
                duration: '180m',
                filmDesription: "Описание для какого то фильма",
                country: 'Неизвестно',
                poster: poster1,
            }
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
                films={films}
                setFilms={setFilms}
            />
            <OpenSales />
        </main>
    );
}
