import { useState } from 'react';
import { nanoid } from 'nanoid';
import { FaSpinner } from 'react-icons/fa';
import api from '../lib/axios';

const useFetch = (url, method = 'POST') => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async (data = null) => {
    try {
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: data ? JSON.stringify(data) : null
      };
      const res = await fetch(url, options);
      const json = await res.json();
      setResponse(json);
    } catch (err) {
      setError(err);
    }
  };

  return { response, error, fetchData };
};

const CreateCoupon = () => {
  const [formData, setFormData] = useState({
    quantity: 1,
    discountValue: ' ',
    restrictionValue: ' ',
    firstDescription: "Cupon De Descuento",
    secondDescription: "Descuentos",
    startDate: "2024-06-10T00:00:00.000Z",
    expirationDate: "2024-12-31T23:59:59.999Z",
    photoUrl: "https://lh3.googleusercontent.com/bVGjdYXycVnGuq9qJG1bI27Hqpzsr9p-xgBlr1dGVCS5CSYJ66Paa_Fq2wgXAdZKM-GZDlMGrlY0YAmJZQIIKcuBuu8R2oWLny8",
    couponType: "VALUE",
    itemId: 1053709,
    countUses: 0,
    expires: true,
    hasDiscount: true,
    hasLimit: true,
    hasRestriction: true,
    maximumNumber: 1,
    startsLater: false
  });
  const { response, error, fetchData } = useFetch('https://dcms-iduiq3dhhq-uc.a.run.app/dcms/coupon', 'POST');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const generateCouponName = () => {
    return nanoid(5).toUpperCase();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    try {
      for (let i = 0; i < formData.quantity; i++) {
        const data = {
          name: generateCouponName(),
          discountValue: formData.discountValue,
          restrictionValue: formData.restrictionValue,
          firstDescription: formData.firstDescription,
          secondDescription: formData.secondDescription,
          startDate: formData.startDate,
          expirationDate: formData.expirationDate,
          photoUrl: formData.photoUrl,
          couponType: formData.couponType,
          itemId: formData.itemId,
          countUses: formData.countUses,
          expires: formData.expires,
          hasDiscount: formData.hasDiscount,
          hasLimit: formData.hasLimit,
          hasRestriction: formData.hasRestriction,
          maximumNumber: formData.maximumNumber,
          startsLater: formData.startsLater
        };
        await fetchData(data);
        // Aquí puedes agregar alguna lógica para manejar el éxito de la creación de cada cupón
      }
      setMessage('¡Cupones creados exitosamente!');
      setFormData({
        quantity: 1,
        discountValue: ' ',
        restrictionValue: ' ',
        firstDescription: "Cupon De Descuento",
        secondDescription: "Descuentos",
        startDate: "2024-06-10T00:00:00.000Z",
        expirationDate: "2024-12-31T23:59:59.999Z",
        photoUrl: "https://lh3.googleusercontent.com/bVGjdYXycVnGuq9qJG1bI27Hqpzsr9p-xgBlr1dGVCS5CSYJ66Paa_Fq2wgXAdZKM-GZDlMGrlY0YAmJZQIIKcuBuu8R2oWLny8",
        couponType: "VALUE",
        itemId: 1053709,
        countUses: 0,
        expires: true,
        hasDiscount: true,
        hasLimit: true,
        hasRestriction: true,
        maximumNumber: 1,
        startsLater: false
      });
    } catch (err) {
      setMessage('Error al crear los cupones: ' + err.message);
      console.error('Error al crear los cupones:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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