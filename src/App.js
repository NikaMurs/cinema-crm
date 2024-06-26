import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './client/pages/MainPage';

import './client/css/normalize.css'
import './client/css/styles.css'
import HallPage from './client/pages/HallPage';
import PaymentPage from './client/pages/PaymentPage';
import TicketPage from './client/pages/TicketPage';
import MainLayout from './client/components/MainLayout';


function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout><MainPage /></MainLayout>} />
      <Route path='/hall' element={<MainLayout><HallPage /></MainLayout>} />
      <Route path='/payment' element={<MainLayout><PaymentPage /></MainLayout>} />
      <Route path='/ticket' element={<MainLayout><TicketPage /></MainLayout>} />
    </Routes>
  );
}

export default App;
