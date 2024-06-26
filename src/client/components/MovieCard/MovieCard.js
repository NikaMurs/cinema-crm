import React from 'react';
import MoviePoster from './MoviePoster';
import MovieDescription from './MovieDescription';
import MovieSeancesHall from './MovieSeancesHall';
import moment from 'moment';

export default function MovieCard({ filmInfo }) {
    const now = moment();


    return (
        <section className="movie">
            <div className="movie__info">
                <MoviePoster src={filmInfo.poster} alt={`${filmInfo.title} постер`} />
                <MovieDescription
                    title={filmInfo.title}
                    description={filmInfo.description}
                    duration={filmInfo.duration}
                    country={filmInfo.country}
                />
            </div>

            {filmInfo.seancesHalls.map((seancesHall, i) => {
                return <MovieSeancesHall key={`seancesHall_${filmInfo.title}_${i}`} title={seancesHall.title} seances={seancesHall.seances} now={now} />
            })}
        </section>
    );
}
