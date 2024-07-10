import React from 'react';
import HallManagement from '../components/mainComponents/hallManagement/HallManagement';
import HallConfiguration from '../components/mainComponents/hallConfiguration/HallConfiguration';
import PriceConfiguration from '../components/mainComponents/priceCongifuration/PriceConfiguration';
import SessionSchedule from '../components/mainComponents/sessionSchedule/SessionSchedule';
import OpenSales from '../components/mainComponents/openSales/OpenSales';

import useHalls from '../hooks/useHalls';
import useFilms from '../hooks/useFilms';

export default function AdminMainPage() {
    const [halls, setHalls] = useHalls();
    const [films, setFilms] = useFilms();

    return (
        <main className="conf-steps">
            <HallManagement halls={halls} setHalls={setHalls} />
            <HallConfiguration halls={halls} setHalls={setHalls} />
            <PriceConfiguration halls={halls} setHalls={setHalls} />
            <SessionSchedule halls={halls} setHalls={setHalls} films={films} setFilms={setFilms} />
            <OpenSales halls={halls} setHalls={setHalls} />
        </main>
    );
}
