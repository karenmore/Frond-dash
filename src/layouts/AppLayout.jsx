import React from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../components/Logo';
import NavMenu from '../components/NavMenu';
import Sidebar from '../components/Sidebar';

const AppLayout = () => {
  return (
    <div className='flex flex-col h-screen'>
      <header className=' py-5'>
        <div className='max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center'>
        <div className='fixed top-0 left-0 z-10'>
        <div className='w-60'>
            <Logo />
          </div>
        </div>
        </div>
      </header>

      <div className=' mx-auto pt-5'>
      <Sidebar />
      </div>


      <main className='flex-1 max-w-screen-4xl mx-auto mt-0 p-3'>
        <Outlet />
      </main>

      <footer className='py-5'>
        <p className='text-center'>
          Dashboard de Soporte Medios Digitales {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default AppLayout;