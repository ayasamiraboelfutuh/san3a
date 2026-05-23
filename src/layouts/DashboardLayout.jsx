// src/layouts/DashboardLayout.jsx
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar'; 

export default function DashboardLayout() {
  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      <Sidebar />
      <main style={{ flexGrow: 1, overflowY: 'auto' }}>
        <Outlet />
      </main>
    </div>
  );
}