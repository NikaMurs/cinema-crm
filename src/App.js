import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './client/pages/MainPage';

import './client/css/normalize.css'
import './client/css/styles.css'
import HallPage from './client/pages/HallPage';
import PaymentPage from './client/pages/PaymentPage';
import TicketPage from './client/pages/TicketPage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/hall' element={<HallPage />} />
      <Route path='/payment' element={<PaymentPage />} />
      <Route path='/ticket' element={<TicketPage />} />
    </Routes>
  );
}

export default App;
