import React from 'react';

const OrderQueued = ({ orderQueued = [], orderQueuedError }) => {
    return (
        <div className='pt-5'>
            <h2 className='text-black text-4xl font-bold mb-2 text-center'>Pedidos Encolados</h2>
            {orderQueuedError ? (
                <p className="text-white mt-2 text-sm italic text-center">¡Alerta! Hay pedidos encolados</p>
            ) : (
                <>
                    {Array.isArray(orderQueued) && orderQueued.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {orderQueued.map((order, index) => {
                                const [cantidad, descripcion, Proveedor, tipoEntrega] = order;
                                const isHighQuantity = cantidad >= 60; // Cambiado a >= 60

                                // Determina el color de fondo basado en la cantidad
                                let bgColor;
                                if (cantidad >= 70) {
                                    bgColor = 'bg-red-900'; // Color para cantidad 70 o más
                                } else if (cantidad >= 60) {
                                    bgColor = 'bg-yellow-500'; // Color amarillo para cantidad entre 60 y 69
                                } else {
                                    bgColor = 'bg-green-700'; // Color por defecto
                                }

                                return (
                                    <div 
                                        key={index} 
                                        className={`relative border rounded-lg p-6 ${bgColor} ${isHighQuantity ? 'titilar' : ''} cursor-pointer hover:shadow-2xl hover:scale-105 transform-origin-center border-2 border-transparent bg-clip-border text-white`}
                                    >
                                        {orderQueuedError && (
                                            <>
                                                <div className={`absolute inset-0 rounded-lg border-6 border-red-500 bg-transparent`} />
                                                <div className={`absolute inset-0 rounded-lg border-4 border-red-300 bg-transparent`} />
                                            </>
                                        )}
                                        <h3 className='font-bold text-lg'>Método de Pago: {descripcion}</h3>
                                        <p className='text-base'>Cantidad: <span className={isHighQuantity ? 'text-black font-bold' : ''}>{cantidad}</span></p>
                                        <p className='text-base'>Proveedor: {Proveedor}</p>
                                        <p className='text-base'>Tipo de Orden: {tipoEntrega}</p>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <p className="text-white text-center">No hay pedidos en cola.</p>
                    )}
                </>
            )}
        </div>
    );
}

export default OrderQueued;