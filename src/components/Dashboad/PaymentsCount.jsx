import React from 'react'

const PaymentsCount = ({paymentsCount, errorPaymentsCount}) => {
    return (
        <div 
          className={`relative rounded-lg p-6 transition-all duration-300 ease-in-out transform ${errorPaymentsCount ? 'bg-red-600 titilar' : 'bg-green-600'} cursor-pointer hover:shadow-2xl hover:scale-105 transform-origin-center border-2 border-transparent bg-clip-border bg-gradient-to-r from-greem-100 to-greem-600`}
        >
          <div className={`absolute inset-0 rounded-lg border-4 ${errorPaymentsCount ? 'border-red-400' : 'border-green-400'} bg-transparent`} />
          <div className={`absolute inset-0 rounded-lg border-2 ${errorPaymentsCount ? 'border-red-200' : 'border-green-200'} bg-transparent`} />
    
          <h2 className='text-white text-lg font-semibold mb-2'>Registros de Pago Movil</h2>
          <p className="text-white text-3xl font-bold">{paymentsCount !== null ? paymentsCount : 'Cargando...'} Pago Movil</p>
          {errorPaymentsCount && <p className="text-white mt-2 text-sm italic">¡Alerta! Hay 0 registros de pago movil en los últimos 3 mins.</p>}
        </div>
      );
}

export default PaymentsCount