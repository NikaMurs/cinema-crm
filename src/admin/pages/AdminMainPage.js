import React, { useEffect } from 'react';
import HallManagement from '../components/mainComponents/hallManagement/HallManagement';
import HallConfiguration from '../components/mainComponents/hallConfiguration/HallConfiguration';
import PriceConfiguration from '../components/mainComponents/priceCongifuration/PriceConfiguration';
import SessionSchedule from '../components/mainComponents/sessionSchedule/SessionSchedule';
import OpenSales from '../components/mainComponents/openSales/OpenSales';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

import useHalls from '../hooks/useHalls';
import useFilms from '../hooks/useFilms';

export default function AdminMainPage() {
    const navigate = useNavigate();
    const [halls, setHalls] = useHalls();
    const [films, setFilms] = useFilms();

    useEffect(() => {
        const validateToken = async () => {
          try {
            const token = Cookies.get('authorization');
            if (!token) {
              Cookies.remove('authorization');
              navigate('/');
              return;
            }
    
            const response = await fetch(`${process.env.REACT_APP_URL}/auth/isValidToken`, {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${token}`
              }
            });
    
            if (response.status !== 200) {
              Cookies.remove('authorization');
              navigate('/admin');
            }
          } catch (error) {
            console.error('Ошибка при проверке токена:', error);
            Cookies.remove('authorization');
            navigate('/admin');
          }
        };
    
        validateToken();
      }, []);

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
