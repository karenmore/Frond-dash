import React from 'react';

const PingServer = ({ pingError }) => {
    return (
        <div 
        className={`relative rounded-lg p-6 transition-all duration-300 ease-in-out transform ${pingError ? 'bg-red-600 titilar' : 'bg-green-600'} cursor-pointer hover:shadow-2xl hover:scale-105 transform-origin-center border-2 border-transparent bg-clip-border bg-gradient-to-r from-greem-100 to-greem-600`}
        >
            <div className={`absolute inset-0 rounded-lg border-4 ${pingError ? 'border-red-400' : 'border-green-400'} bg-transparent`} />
            <div className={`absolute inset-0 rounded-lg border-2 ${pingError ? 'border-red-200' : 'border-green-200'} bg-transparent`} />

            {pingError ? (
                <div>
                    <h2 className="text-white text-lg font-semibold mb-2">¡Error en la conexión!</h2>
                    <p className="text-white">El servidor no está respondiendo correctamente.</p>
                </div>
            ) : (
                <div>
                    <h2 className="text-white text-lg font-semibold mb-2">Conexión establecida</h2>
                    <p className="text-white">La salud del servidor es estable.</p>
                </div>
            )}
        </div>
    );
};

export default PingServer;