import { useState, useEffect } from 'react';

export default function useHalls() {
    const [halls, setHalls] = useState([]);

    useEffect(() => {
        async function fetchHallsAndSeances() {
            try {
                // Запрос к /halls
                const hallsResponse = await fetch(`${process.env.REACT_APP_URL}/halls`);
                if (!hallsResponse.ok) {
                    throw new Error('Network response was not ok');
                }
                const hallsData = await hallsResponse.json();

                // Запрос к /seances
                const seancesResponse = await fetch(`${process.env.REACT_APP_URL}/seances`);
                if (!seancesResponse.ok) {
                    throw new Error('Network response was not ok');
                }
                const seancesData = await seancesResponse.json();

                // Создание объекта для хранения сеансов по ID зала
                const seancesByHallId = seancesData.reduce((acc, seance) => {
                    if (!acc[seance.hallId]) {
                        acc[seance.hallId] = [];
                    }
                    acc[seance.hallId].push(seance);
                    return acc;
                }, {});

                // Обновление данных зала с сеансами
                const updatedHalls = hallsData.map(hall => ({
                    ...hall,
                    seances: seancesByHallId[hall.id] || []
                }));

                setHalls(updatedHalls);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        }

        fetchHallsAndSeances();
    }, []);

    return [halls, setHalls];
}



// {
//     id: 1,
//     title: 'Зал 1',
//     rows: [
//         ['disabled', 'disabled', 'disabled', 'disabled', 'disabled', 'standart', 'standart', 'disabled', 'disabled', 'disabled', 'disabled', 'disabled'],
//         ['disabled', 'disabled', 'disabled', 'disabled', 'standart', 'standart', 'standart', 'standart', 'disabled', 'disabled', 'disabled', 'disabled'],
//         ['disabled', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'disabled', 'disabled', 'disabled'],
//         ['standart', 'standart', 'standart', 'standart', 'vip', 'vip', 'vip', 'vip', 'standart', 'disabled', 'disabled', 'disabled'],
//         ['standart', 'standart', 'standart', 'standart', 'vip', 'vip', 'vip', 'vip', 'standart', 'disabled', 'disabled', 'disabled'],
//         ['standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'disabled', 'disabled', 'disabled'],
//         ['standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'disabled', 'disabled', 'disabled'],
//         ['standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart'],
//         ['standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart'],
//     ],
//     price: {
//         standart: 250,
//         vip: 350,
//     },
//     seances: [
//         {
//             time: '0:00',
//             filmId: 1,
//             filmTitle: "Звездные войны",
//             duration: '120m'
//         },
//         {
//             time: '12:00',
//             filmId: 2,
//             filmTitle: 'Какой то фильм',
//             duration: '180m'
//         }
//     ],
//     isActive: true,
// },
// {
//     id: 2,
//     title: 'Зал 2',
//     rows: [
//         ['disabled', 'disabled', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'disabled', 'disabled'],
//         ['disabled', 'disabled', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'disabled', 'disabled'],
//         ['disabled', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'disabled'],
//         ['disabled', 'standart', 'standart', 'standart', 'vip', 'vip', 'vip', 'vip', 'standart', 'standart', 'disabled'],
//         ['standart', 'standart', 'standart', 'standart', 'vip', 'vip', 'vip', 'vip', 'standart', 'standарт', 'standart'],
//         ['standart', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт'],
//         ['standарт', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт'],
//         ['standарт', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт', 'standарт'],
//     ],
//     price: {
//         standart: 2500,
//         vip: 3500,
//     },
//     seances: [
//         {
//             time: '19:30',
//             filmId: 1,
//             filmTitle: "Звездные войны",
//             duration: '120m'
//         }
//     ],
//     isActive: false,
// },
