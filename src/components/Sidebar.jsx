import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation(); // Obtener la ubicación actual

  return (
    <nav className='text-black font-bold p-4 flex space-x-4'>
      <Link 
        to="/" 
        className={`py-2 px-4 rounded cursor-pointer ${location.pathname === '/' ? 'border-b-2 border-indigo-600' : ''}`}
      >
        Dashboard
      </Link>
      <Link 
        to="/createCoupon" 
        className={`py-2 px-4 rounded cursor-pointer ${location.pathname === '/createCoupon' ? 'border-b-2 border-indigo-600' : ''}`}
      >
        Creación de Cupones
      </Link>
      <Link 
        to="/settings" 
        className={`py-2 px-4 rounded cursor-pointer ${location.pathname === '/settings' ? 'border-b-2 border-indigo-600' : ''}`}
      >
        Configuraciones
      </Link>
    </nav>
  );
}

export default Sidebar;