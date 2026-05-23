import React from 'react';
import { ShoppingBag, Eye, Check, Truck, CheckCircle } from 'lucide-react';

export default function OrderTable({ orders, onVerify, onShip, onDeliver }) {
    
  return (
   <div className="w-100">
  <h4 className="fw-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#2c1a11' }}>
    <ShoppingBag size={22} className="me-2" style={{ color: '#c85a32' }} /> Customer Orders & Verification Workflows
  </h4>
  
  {/* The table now sits directly in the main layout without the card wrapper */}
  <div className="table-responsive">
    <table className="table align-middle text-nowrap">
      <thead>
        <tr className="text-muted small border-bottom">
          <th>Order ID</th>
          <th>Client</th>
          <th>Purchased Item</th>
          <th>Payment</th>
          <th>Status</th>
          <th className="text-end">Actions</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id} style={{ fontSize: '14px' }}>
            <td className="font-monospace fw-bold">{order.id}</td>
            <td>
              <div className="fw-bold">{order.customer}</div>
              <div className="text-muted small">{order.phone}</div>
            </td>
            <td className="fw-semibold">
              {order.item}<br/>
              <span className="text-success small">{order.total} EGP</span>
            </td>
            <td>
              <span className="badge bg-light text-dark border">{order.paymentMethod}</span>
            </td>
            <td>
              <span className="badge rounded-pill px-3" 
                style={{ backgroundColor: order.status === 'Pending Verification' ? '#fff3cd' : '#d1e7dd' }}>
                {order.status}
              </span>
            </td>
            <td className="text-end">
              {order.status === 'Pending Verification' && (
                <>
                  <a href={order.screenshot} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-secondary rounded-pill me-1"><Eye size={14}/></a>
                  <button onClick={() => onVerify(order.id)} className="btn btn-sm btn-success rounded-pill"><Check size={14}/> Verify</button>
                </>
              )}
              {order.status === 'In Progress' && <button onClick={() => onShip(order.id)} className="btn btn-sm btn-dark rounded-pill"><Truck size={14}/> Dispatch</button>}
              {order.status === 'Shipped' && <button onClick={() => onDeliver(order.id)} className="btn btn-sm btn-outline-success rounded-pill"><CheckCircle size={14}/> Delivered</button>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
  );
}