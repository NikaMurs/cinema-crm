import React from 'react';
import MoviePoster from './MoviePoster';
import MovieDescription from './MovieDescription';
import MovieSeancesHall from './MovieSeancesHall';
import moment from 'moment';
import { useSelector } from 'react-redux';

export default function MovieCard({ filmInfo }) {
    const selectedDay = useSelector((state) => state.user.selectedDay);
    const now = moment();

    return (
        <section className="movie">
            <div className="movie__info">
                <MoviePoster src={`${process.env.REACT_APP_URL}/${filmInfo.poster}`} alt={`${filmInfo.title} постер`} />
                <MovieDescription
                    title={filmInfo.title}
                    description={filmInfo.description}
                    duration={filmInfo.duration}
                    country={filmInfo.country}
                />
            </div>

            {filmInfo.seancesHalls.map((seancesHall, i) => {
                return (
                    <MovieSeancesHall key={`seancesHall_${filmInfo.title}_${i}`}
                        filmInfo={{ id: filmInfo.filmId, title: filmInfo.title }}
                        hallInfo={{ id: seancesHall.hallId, title: seancesHall.title }}
                        title={seancesHall.title}
                        seances={seancesHall.seances} 
                        selectedDay={selectedDay}
                         now={now} />
                )
            })}
        </section>
    );
}
