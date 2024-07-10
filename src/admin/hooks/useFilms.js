import { useState, useEffect } from 'react';
import poster1 from '../img/poster.png';

export default function useFilms() {
    const [films, setFilms] = useState([]);

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
    }, []);

    return [films, setFilms];
}
