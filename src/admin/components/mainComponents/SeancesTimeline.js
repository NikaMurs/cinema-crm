import React from 'react';
import moment from 'moment';

export default function SeancesTimeline({ hallTitle, seances }) {
    const timeToMinutes = (time) => {
        const momentTime = moment(time, 'HH:mm');
        return momentTime.hours() * 60 + momentTime.minutes();
    };

    const durationToMinutes = (duration) => {
        return parseInt(duration);
    };

    return (
        <div className="conf-step__seances-hall">
            <h3 className="conf-step__seances-title">{hallTitle}</h3>
            <div className="conf-step__seances-timeline">
                {seances?.map((seance, index) => {
                    const startMinutes = timeToMinutes(seance.time);
                    const durationMinutes = durationToMinutes(seance.duration);
                    const width = (durationMinutes / 60) * 30;
                    const left = (startMinutes / 1440) * 100; 

                    return (
                        <div
                            key={index}
                            className="conf-step__seances-movie"
                            style={{
                                width: `${width}px`,
                                left: `${left}%`,
                                position: 'absolute'
                            }}
                        >
                            <p className="conf-step__seances-movie-title">{seance.filmTitle}</p>
                            <p className="conf-step__seances-movie-start">Начало: {seance.time}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}