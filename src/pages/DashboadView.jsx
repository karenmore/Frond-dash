import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import api from '../lib/axios';
import OrderCount from '../components/Dashboad/OrderCount';
import OrderCity from '../components/Dashboad/OrderCity';
import AtomId from '../components/Dashboad/AtomId';
import PingDatabase from '../components/Dashboad/PingDatabase';
import PingServer from '../components/Dashboad/PingServer';
import OrderQueued from '../components/Dashboad/OrderQueued';
import PaymentsCount from '../components/Dashboad/PaymentsCount';
import PagoLinea from '../components/Dashboad/PagoLinea';
import DeliveryValue from '../components/Dashboad/DeliveryValue';

const DashboardView = () => {
  const [count, setCount] = useState(null);
  const [errorCount, setErrorCount] = useState(false);
  
  const [cities, setCities] = useState([]);
  const [citiesError, setCitiesError] = useState(false);
  
  const [atomId, setAtomId] = useState(null);
  const [atomIdError, setAtomIdError] = useState(false);
  
  const [pingdb, setPingdb] = useState(null);
  const [pingdbError, setPingdbError] = useState(false);

  const [pingResults, setPingResults] = useState([]);
  const [pingError, setPingError] = useState(false);
  
  const [orderQueued, setOrderQueued] = useState(null);
  const [orderQueuedError, setOrderQueuedError] = useState(false);

  const [paymentsCount, setPaymentsCount] = useState(null);
  const [errorPaymentsCount, setErrorPaymentsCount] = useState(false);

  const [PagoLineaCount, setPagoLineaCount] = useState(null);
  const [errorPagoLineaCount, setErrorPagoLineaCount] = useState(false);

  const [deliveryValue, setDeliveryValue] = useState(null);
  const [errorDeliveryValue, setErrorDeliveryValue] = useState(false);

  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    console.log('Fetching data on demand...'); // Agregar esta línea
    try {
      const response = await api.get('/order-count');
      const newCount = response.data.count;
      setCount(newCount);
      setErrorCount(newCount === 0);
    } catch (err) {
      console.error('Error al consultar la cantidad de órdenes', err);
      setErrorCount(true);
    } finally {
      setLoading(false); // Asegúrate de establecer loading en false al final
    }
  };

  const fetchCities = async () => {
    try {
      const response = await api.get('/order-city');
      setCities(response.data.cities);
      setCitiesError(response.data.cities.length === 0);
    } catch (err) {
      console.error('Error al consultar las ciudades', err);
      setCitiesError(true);
    }
  };

  const fetchAtomId = async () => {
    try {
      const response = await api.get('/count-atomid');
      setAtomId(response.data.atomId);
      setAtomIdError(response.data.atomId.length === 0);
    } catch (err) {
      console.error('Error al consultar el atom id', err);
      setAtomIdError(true);
    }
  };

  const fetchPingdb = async () => {
    try {
      const response = await api.get('/ping');
      const message = response.data;
      setPingdb(message === "Conexión exitosa a la base de datos Delivery");
      setPingdbError(message !== "Conexión exitosa a la base de datos Delivery");
    } catch (err) {
      console.error('Error al consultar la conexión de la base de datos', err);
      setPingdbError(true);
    }
  };

  const fetchPingServe = async () => {
    try {
        const response = await api.get('/ping-server');
        const message = response.data;

        setPingError(message.status !== 'Salud del servidor estable');
    } catch (err) {
        console.error('Error al consultar la conexión de la base de datos', err);
        setPingError(true);
    }
};

  const fetchOrderQueued = async () => {
    try {
      const response = await api.get('/OrderQueued');
      setOrderQueued(response.data);
      setOrderQueuedError(false);
    } catch (err) {
      console.error(err);
      setOrderQueuedError(true);
    }
  };

  const fetchPaymentsCount = async () => {
    try {
      const response = await api.get('/PaymentsCount');
      const newCount = response.data.count;
      setPaymentsCount(newCount);
      setErrorPaymentsCount(newCount === 0);
    } catch (err) {
      console.error('Error al consultar la cantidad de órdenes', err);
      setErrorPaymentsCount(true);
    }
  };

  const fetchPagoLinea = async () => {
    try {
      const response = await api.get('/PagoLinea');
      const newCount = response.data.count;
      setPagoLineaCount(newCount);
      setErrorPagoLineaCount(newCount === 0);
    } catch (err) {
      console.error('Error al consultar la cantidad de órdenes', err);
      setErrorPagoLineaCount(true);
    }
  };

  const fetchDeliveryValue = async () => {
    try {
      const response = await api.get('/DeliveryValue');
      const formattedData = response.data.map(item => ({
        date: new Date(item[0]).toLocaleDateString(), // Formatear la fecha
        value: item[1]
      }));
      setDeliveryValue(formattedData);
      setErrorDeliveryValue(false);
    } catch (err) {
      console.error(err);
      setErrorDeliveryValue(true);
    }
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 600000); 
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    fetchCities();
    const intervalId = setInterval(fetchCities, 600000); 
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    fetchAtomId();
    const intervalId = setInterval(fetchAtomId, 600000); 
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    fetchPingServe();
    const intervalId = setInterval(fetchPingServe, 600000);
    return () => clearInterval(intervalId);
  }, []);

  /*useEffect(() => {
    fetchPingdb();
    const intervalId = setInterval(fetchPingdb, 600000);
    return () => clearInterval(intervalId);
  }, []);*/

  useEffect(() => {
    fetchOrderQueued();
    const intervalId = setInterval(fetchOrderQueued, 300000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    fetchPaymentsCount();
    const intervalId = setInterval(fetchPaymentsCount, 300000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    fetchPagoLinea();
    const intervalId = setInterval(fetchPagoLinea, 300000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    fetchDeliveryValue();
    const intervalId = setInterval(fetchDeliveryValue, 300000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='p-5'>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <OrderCount count={count} errorCount={errorCount} fetchData={fetchData}/>
          <AtomId atomId={atomId} atomIdError={atomIdError} />
          <PingServer pingResults={pingResults} pingError={pingError} />
          <PaymentsCount paymentsCount={paymentsCount} errorPaymentsCount={errorPaymentsCount}/>
          <PagoLinea PagoLineaCount={PagoLineaCount} errorPagoLineaCount={errorPagoLineaCount}/>
          <DeliveryValue deliveryValue={deliveryValue} errorDeliveryValue={errorDeliveryValue} />
        </div>
      )}
      <OrderQueued orderQueued={orderQueued} orderQueuedError={orderQueuedError} />
      <OrderCity cities={cities} citiesError={citiesError} />
    </div>
  );  
};

export default DashboardView;