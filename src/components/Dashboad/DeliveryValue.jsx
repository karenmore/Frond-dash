import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const DeliveryValue = ({ deliveryValue, errorDeliveryValue }) => {
  if (errorDeliveryValue) {
    return <div>Error al cargar los datos de entrega.</div>;
  }

  return (
    <div>
      <h2>Valores de Entrega</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={deliveryValue}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DeliveryValue;