import React from 'react'

const PingDatabase = ({ pingdb, pingdbError}) => {
  return (
      <div className={`relative rounded-lg p-4 ${pingdbError ? 'bg-red-700 bg-opacity-100' : 'bg-green-800 bg-opacity-100'}`}>
      <div className={`absolute inset-0 rounded-lg border-6 ${pingdbError ? 'border-red-500' : 'border-green-500'} bg-transparent`} />
      <div className={`absolute inset-0 rounded-lg border-4 ${pingdbError ? 'border-red-300' : 'border-green-300'} bg-transparent`} />
    <h2 className='text-white text-lg font-bold'>Estado de la base de Datos</h2>
    {pingdb ? (
        <p className="text-white text-2xl">Conexión exitosa a la base de datos.</p>
    ) : (
        <p className="text-white text-2xl">Conexión fallida a la base de datos.</p>
    )}
    {pingdbError && <p className="text-white">¡Alerta! Hay una falla con la base de datos</p>}
</div>
  )
}

export default PingDatabase