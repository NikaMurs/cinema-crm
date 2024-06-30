import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import MainPage from './client/pages/MainPage';

import HallPage from './client/pages/HallPage';
import PaymentPage from './client/pages/PaymentPage';
import TicketPage from './client/pages/TicketPage';
import MainLayout from './client/components/MainLayout';

import AdminMainLayout from './admin/components/AdminMainLayout';
import AdminIsLoged from './admin/components/AdminIsLoged'
import AdminMainPage from './admin/pages/AdminMainPage';


function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith('/admin')) {
      document.body.classList.add('admin-body');
      document.body.classList.remove('client-body');
    } else {
      document.body.classList.add('client-body');
      document.body.classList.remove('admin-body');
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path='/' element={<MainLayout><MainPage /></MainLayout>} />
      <Route path='/hall' element={<MainLayout><HallPage /></MainLayout>} />
      <Route path='/payment' element={<MainLayout><PaymentPage /></MainLayout>} />
      <Route path='/ticket' element={<MainLayout><TicketPage /></MainLayout>} />

      <Route path='/admin' element={<AdminMainLayout><AdminIsLoged><AdminMainPage /></AdminIsLoged></AdminMainLayout>} />
    </Routes>
  );
}

export default App;
