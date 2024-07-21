import { useState, useEffect } from 'react';

export default function useFilms() {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        async function fetchFilms() {
            try {
                const response = await fetch(`${process.env.REACT_APP_URL}/films`);
                if (!response.ok) {
                    throw new Error('Ошибка соединения');
                }
                const data = await response.json();
                setFilms(data);
            } catch (error) {
                console.error('Ошибка запроса:', error);
            }
        }

        fetchFilms();
    }, []);

    return [films, setFilms];
}
