import { useState, useEffect } from 'react';

export default function useHalls() {
    const [halls, setHalls] = useState([]);

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
                    ['standart', 'standart', 'standart', 'standart', 'vip', 'vip', 'vip', 'vip', 'standart', 'standарт', 'standart'],
                    ['standart', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт'],
                    ['standарт', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт'],
                    ['standарт', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт'],
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
                isActive: false,
            },
        ])
    }, []);

    return [halls, setHalls];
}
