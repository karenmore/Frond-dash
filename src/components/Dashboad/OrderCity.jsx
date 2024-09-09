import React from 'react';

const OrderCity = ({ cities, citiesError }) => {
  return (
    <div className={`border rounded-lg p-4 ${citiesError ? 'bg-red-700' : 'bg-green-700'} mt-4`}>
      <h2 className='text-white text-3xl text-lg font-bold'>Ciudades sin Órdenes / Pueden ser tiendas cerradas o con error</h2>
      {cities.length > 0 ? (
        <div className="grid grid-cols-6 gap-4">
          {cities.map((city, index) => (
            <div key={index} className="bg-white text-black p-4 rounded-lg shadow-md">
              <h3 className="font-bold">{city[2]} {city[4]}</h3>
              <p>{city[3]}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-white">Cargando ciudades...</p>
      )}
      {citiesError && <p className="text-white">¡Alerta! No hay ciudades sin órdenes.</p>}
    </div>
  );
};

export default OrderCity;