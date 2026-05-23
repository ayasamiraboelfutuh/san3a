// src/layouts/MainLayout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/home/Navbar';
import Footer from '../Components/home/Footer';

export default function MainLayout({ cartCount }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar cartCount={cartCount} />
      <main style={{ flex: '1 0 auto' }}>
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}