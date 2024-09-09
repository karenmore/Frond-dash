import React from 'react';

const OrderCount = ({ count, errorCount, fetchData }) => {
  return (
    <div 
      className={`relative rounded-lg p-6 transition-all duration-300 ease-in-out transform ${errorCount ? 'bg-red-600 titilar' : 'bg-green-600'} cursor-pointer hover:shadow-2xl hover:scale-105 transform-origin-center border-2 border-transparent bg-clip-border bg-gradient-to-r from-greem-100 to-greem-600`}
    >
      <div className={`absolute inset-0 rounded-lg border-4 ${errorCount ? 'border-red-400' : 'border-green-400'} bg-transparent`} />
      <div className={`absolute inset-0 rounded-lg border-2 ${errorCount ? 'border-red-200' : 'border-green-200'} bg-transparent`} />

      <h2 className='text-white text-lg font-semibold mb-2'>Órdenes a Nivel Nacional</h2>
      <p className="text-white text-3xl font-bold">{count !== null ? count : 'Cargando...'} Ordenes</p>
      {errorCount && <p className="text-white mt-2 text-sm italic">¡Alerta! Hay 0 órdenes en los últimos 3 mins.</p>}
      <button onClick={fetchData} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
  Consultar
</button>

    </div>
  );
};

export default OrderCount;