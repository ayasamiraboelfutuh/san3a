// src/pages/Orders.jsx
import React, { useState } from 'react';
import OrderTable from '../components/dashboard/OrderTable'; // Ensure this path is correct

export default function Orders() {
  // Move your state here
  const [orders, setOrders] = useState([
    { id: 'ORD-2026-01', customer: 'Aya Samir', item: 'Hand-Thrown Terracotta Vase', total: 850, status: 'Pending Verification' }
  ]);

  // Move your logic functions here
  const handleVerifyPayment = (id) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status: 'In Progress' } : o));
  };

  const handleMarkAsShipped = (id) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status: 'Shipped' } : o));
  };

  const handleMarkAsDelivered = (id) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status: 'Delivered' } : o));
  };

  return (
    <div className="p-4">
    <h2 className="fw-bold mb-4">Customer Orders</h2>
      {/* "Drop" the OrderTable component here */}
      <OrderTable 
        orders={orders} 
        onVerify={handleVerifyPayment} 
        onShip={handleMarkAsShipped} 
        onDeliver={handleMarkAsDelivered} 
      />
    </div>
  );
}