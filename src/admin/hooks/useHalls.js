import { useState, useEffect } from 'react';

export default function useHalls() {
    const [halls, setHalls] = useState([]);

    useEffect(() => {
        async function fetchHallsAndSeances() {
            try {
                const hallsResponse = await fetch(`${process.env.REACT_APP_URL}/halls`);
                if (!hallsResponse.ok) {
                    throw new Error('Ошибка соединения');
                }
                const hallsData = await hallsResponse.json();

                const seancesResponse = await fetch(`${process.env.REACT_APP_URL}/seances`);
                if (!seancesResponse.ok) {
                    throw new Error('Ошибка соединения');
                }
                const seancesData = await seancesResponse.json();

                const seancesByHallId = seancesData.reduce((acc, seance) => {
                    if (!acc[seance.hallId]) {
                        acc[seance.hallId] = [];
                    }
                    acc[seance.hallId].push(seance);
                    return acc;
                }, {});

                const updatedHalls = hallsData.map(hall => ({
                    ...hall,
                    seances: seancesByHallId[hall.id] || []
                }));

                setHalls(updatedHalls);
            } catch (error) {
                console.error('Ошибка запроса:', error);
            }
        }

        fetchHallsAndSeances();
    }, []);

    return [halls, setHalls];
}
