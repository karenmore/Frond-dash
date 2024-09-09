import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import useCreateCoupon from '../pages/CreateCoupon'

const CreateCoupon = () => {
  const { formData, isLoading, message, handleChange, createCoupons } = useCreateCoupon();

  const handleSubmit = (e) => {
    e.preventDefault();
    createCoupons();
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Crear Cupones</h2>
        {message && (
          <div className={`mb-4 ${message.startsWith('Error') ? 'text-red-500' : 'text-green-500'}`}>
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="quantity" className="block font-bold mb-2">
              Cantidad de cupones:
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="discountValue" className="block font-medium mb-2">Valor de descuento:</label>
            <input type="text" id="discountValue" name="discountValue" value={formData.discountValue} onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 w-full" />
          </div>
          <div>
            <label htmlFor="restrictionValue" className="block font-medium mb-2">Valor de restricción:</label>
            <input type="text" id="restrictionValue" name="restrictionValue" value={formData.restrictionValue} onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 w-full" />
          </div>
          <div>
            <label htmlFor="firstDescription" className="block font-medium mb-2">Primera descripción:</label>
            <input type="text" id="firstDescription" name="firstDescription" value={formData.firstDescription} onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 w-full" />
          </div>
          <div>
            <label htmlFor="secondDescription" className="block font-medium mb-2">Segunda descripción:</label>
            <input type="text" id="secondDescription" name="secondDescription" value={formData.secondDescription} onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 w-full" />
          </div>
          <div>
            <label htmlFor="startDate" className="block font-medium mb-2">Fecha de inicio:</label>
            <input type="datetime-local" id="startDate" name="startDate" value={formData.startDate} onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 w-full" />
          </div>
          <div>
            <label htmlFor="expirationDate" className="block font-medium mb-2">Fecha de expiración:</label>
            <input type="datetime-local" id="expirationDate" name="expirationDate" value={formData.expirationDate} onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 w-full" />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <FaSpinner className="animate-spin mr-2" />
                Creando cupones...
              </div>
            ) : (
              'Crear Cupones'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCoupon;