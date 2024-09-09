import React from 'react';

const AtomId = ({ atomId, atomIdError }) => {
  const isError = atomIdError || atomId > 10; // Considera el error si atomIdError es verdadero o si atomId es mayor a 10.

  return (
<div 
className={`relative rounded-lg p-6 transition-all duration-300 ease-in-out transform ${isError ? 'bg-red-600 titilar' : 'bg-green-600'} cursor-pointer hover:shadow-2xl hover:scale-105 transform-origin-center border-2 border-transparent bg-clip-border bg-gradient-to-r from-greem-100 to-greem-600`}
>
<div className={`absolute inset-0 rounded-lg border-4 ${isError ? 'border-red-400' : 'border-green-400'} bg-transparent`} />
<div className={`absolute inset-0 rounded-lg border-2 ${isError ? 'border-red-200' : 'border-green-200'} bg-transparent`} />

<h2 className='text-white text-lg font-semibold mb-2'>Cantidad de clientes sin ATOM_ID</h2>
<p className="text-white text-3xl font-bold">Cantidad {atomId !== null ? atomId : 'Cargando...'}</p>
{isError && <p className="text-white mt-2 text-sm italic">¡Alerta! Hay un error con el registro de clientes</p>}
</div>
  );
};

export default AtomId;