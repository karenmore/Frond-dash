import React from 'react'

const PagoLinea = ({PagoLineaCount,errorPagoLineaCount}) => {
    return (
        <div 
          className={`relative rounded-lg p-6 transition-all duration-300 ease-in-out transform ${errorPagoLineaCount ? 'bg-red-600 titilar' : 'bg-green-600'} cursor-pointer hover:shadow-2xl hover:scale-105 transform-origin-center border-2 border-transparent bg-clip-border bg-gradient-to-r from-greem-100 to-greem-600`}
        >
          <div className={`absolute inset-0 rounded-lg border-4 ${errorPagoLineaCount ? 'border-red-400' : 'border-green-400'} bg-transparent`} />
          <div className={`absolute inset-0 rounded-lg border-2 ${errorPagoLineaCount ? 'border-red-200' : 'border-green-200'} bg-transparent`} />
    
          <h2 className='text-white text-lg font-semibold mb-2'>Pago en Linea</h2>
          <p className="text-white text-3xl font-bold">{PagoLineaCount !== null ? PagoLineaCount : 'Cargando...'} TDC</p>
          {errorPagoLineaCount && <p className="text-white mt-2 text-sm italic">¡Alerta! Hay 0 órdenes de pago en linea en los últimos 3 mins.</p>}
        </div>
      );
}

export default PagoLinea