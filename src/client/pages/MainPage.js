import { useEffect, useState } from 'react'
import DateSlider from '../components/DateSlider'
import MovieCard from '../components/movieCard/MovieCard'
import poster1 from '../img/poster1.jpg'
import poster2 from '../img/poster2.jpg'


export default function MainPage() {
    const [filmsInfo, setFilmsInfo] = useState([]);

    useEffect(() => {
        const fetchFilms = async () => {
          try {
            const response = await fetch(`${process.env.REACT_APP_URL}/movies`);
            if (!response.ok) {
              throw new Error('Ошибка соединения');
            }
            const data = await response.json();
            setFilmsInfo(data);
          } catch (error) {
            console.error('Ошибка при fetching данных:', error);
          }
        };
        fetchFilms();
      }, []); 


    return (
        <>
            <DateSlider />
            <main>
                {filmsInfo.map((filmInfo, i) => {
                    return <MovieCard key={`movieCard_${filmInfo.title}_${i}`} filmInfo={filmInfo} />
                })}
            </main>
        </>
    )
}