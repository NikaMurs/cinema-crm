import React, { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/ru';

moment.locale('ru');

export default function DateSlider() {
    const today = moment();
    const [selectedDate, setSelectedDate] = useState(today);
    const [daysOfWeek, setDaysOfWeek] = useState([]);

    const renderWeek = (firstDay) => {
        let daysOfWeek = [];
        for (let i = 0; i < 7; i++) {
            daysOfWeek.push(firstDay.clone().add(i, 'days'));
        }
        setDaysOfWeek(daysOfWeek);
    }

    useEffect(() => {
        renderWeek(today);
    }, [])

    const handleDayClick = (day) => {
        setSelectedDate(day);
    };

    const handlePrevWeek = () => {
        if (!daysOfWeek[0].isSame(today, 'week')) {
            renderWeek(daysOfWeek[0].clone().add(-1, 'week'))
        }
    };

    const handleNextWeek = () => {
        renderWeek(daysOfWeek[0].clone().add(1, 'week'))
    };

    const checkDay = (day) => {
        const classes = [];
        if (day.isSame(selectedDate, 'day')) {
            classes.push('page-nav__day_chosen');
        };
        if (day.isSame(today, 'day')) {
            classes.push('page-nav__day_today');
        };
        if (day.day() === 6 || day.day() === 0) {
            classes.push('page-nav__day_weekend');
        };
        return classes.join(' ')
    }

    return (
        <nav className="page-nav">
            <div
                className={`page-nav__day page-nav__day_prev`}
                onClick={handlePrevWeek}
            />
            {daysOfWeek.map(day => (
                <div
                    key={day.format('YYYY-MM-DD')}
                    className={`page-nav__day ${checkDay(day)}`}
                    onClick={() => handleDayClick(day)}
                >
                    <span className="page-nav__day-week">
                        {day.format('dd')}
                    </span>
                    <span className="page-nav__day-number">{day.format('DD.MM')}</span>
                </div>
            ))}
            <div className="page-nav__day page-nav__day_next" onClick={handleNextWeek} />
        </nav>
    );
}
