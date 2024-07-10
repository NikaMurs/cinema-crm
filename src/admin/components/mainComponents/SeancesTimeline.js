import React, { useState } from 'react';
import moment from 'moment';
import trashImg from '../../img/trash.png'

export default function SeancesTimeline({ setHalls, hallId, hallTitle, seances, openSeanceModal }) {
    const [draggedSeance, setDraggedSeance] = useState(null);

    const timeToMinutes = (time) => {
        const momentTime = moment(time, 'HH:mm');
        return momentTime.hours() * 60 + momentTime.minutes();
    };

    const durationToMinutes = (duration) => {
        return parseInt(duration);
    };

    const handleDragStart = (seance) => {
        setDraggedSeance(seance);
    };

    const handleDragEnd = () => {
        setDraggedSeance(null);
    };

    const handleDrop = (event) => {
        const filmId = event.dataTransfer.getData("filmId");
        openSeanceModal(filmId);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDelete = (hallId, seance) => {
        setHalls(prevState => {
            // Find the hall in previous state
            const updatedHalls = prevState.map(hall => {
                if (hall.id === hallId) {
                    // Filter out the seance to be deleted
                    const updatedSeances = hall.seances.filter(item => item !== seance);
                    return { ...hall, seances: updatedSeances };
                }
                return hall;
            });

            return updatedHalls;
        });
    };

    return (
        <div className="conf-step__seances-hall" onDrop={handleDrop} onDragOver={handleDragOver}>
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
                                position: 'absolute',
                            }}
                            draggable
                            onDragStart={() => handleDragStart(seance)}
                            onDragEnd={handleDragEnd}

                        >
                            <p className="conf-step__seances-movie-title">{seance.filmTitle}</p>
                            <p className="conf-step__seances-movie-start">{seance.time}</p>
                        </div>
                    );
                })}
            </div>
            <div
                className="conf-step__seances-trash"
                onDragOver={handleDragOver}
                onDrop={() => handleDelete(hallId, draggedSeance)}
            >
                <img class="trash-seance" src={trashImg} alert="Trash icon" style={{ display: 'block' }} />
            </div>
        </div>
    );
}
