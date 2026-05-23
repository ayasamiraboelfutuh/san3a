import React from 'react';
import { LayoutDashboard, ShoppingBag, Package } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();

  // Define paths that match your Route setup
  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/artisan-dashboard' },
    { name: 'Orders', icon: <ShoppingBag size={20} />, path: '/artisan-orders' },
    { name: 'Inventory', icon: <Package size={20} />, path: '/artisan-inventory' },
  ];

  return (
    <div className="bg-white border-end p-4" style={{ width: '260px', height: '100vh' }}>
      <h3 className="fw-bold mb-5" style={{ color: '#2c1a11' }}>San3A Admin</h3>
      <nav className="nav flex-column gap-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`nav-link d-flex align-items-center w-100 border-0 rounded-3 ${isActive ? 'bg-light text-dark fw-bold' : 'text-muted'}`}
              style={{ textDecoration: 'none' }}
            >
              <span className="me-3">{item.icon}</span> {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}