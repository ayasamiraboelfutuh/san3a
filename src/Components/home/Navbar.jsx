import React from 'react';
import { ShoppingBag, Search, User, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
export default function Navbar({ cartCount }) {
  const location = useLocation(); // Allows us to see the active path
  const primaryEarth = '#2c1a11';
  const accentClay = '#c85a32';
  const { cartItems } = useCart();
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const { user,logout } = useAuth(); 
  return (
    <nav className="navbar navbar-expand-md sticky-top py-1 shadow-sm" style={{ backgroundColor: 'rgba(253, 252, 247, 0.95)', borderBottom: '1px solid rgba(44, 26, 17, 0.06)', backdropFilter: 'blur(10px)', zIndex: 1050 }}>
      <div className="container-fluid px-3 px-md-5 d-flex justify-content-between align-items-center">
        
        <div className="d-flex align-items-center gap-4">
          {/* Logo as a Link */}
          <Link to="/" className="navbar-brand fs-1 fw-bold m-0 tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: primaryEarth, letterSpacing: '-1px', textDecoration: 'none' }}>
            San3A<span style={{ color: accentClay }}>.</span>
          </Link>

          <div className="d-none d-md-flex align-items-center gap-3">
            {/* Explore Link */}
            
            <Link to="/" className="nav-item-custom" style={{ cursor: 'pointer', fontSize: '14px', fontWeight: location.pathname === '/' ? '600' : '400', color: location.pathname === '/' ? primaryEarth : '#7f746d', borderBottom: `2px solid ${location.pathname === '/' ? accentClay : 'transparent'}`, paddingBottom: '4px', textDecoration: 'none' }}>
              Explore
            </Link>
            
            {/* Artisan Center Link */}
            {user?.role === 'seller' && (
        <Link to="/artisan-dashboard" >My Dashboard</Link>
      )}
            {/* <Link to="/artisan-dashboard" className="nav-item-custom" style={{ cursor: 'pointer', fontSize: '14px', fontWeight: location.pathname === '/artisan-dashboard' ? '600' : '400', color: location.pathname === '/artisan-dashboard' ? primaryEarth : '#7f746d', borderBottom: `2px solid ${location.pathname === '/artisan-dashboard' ? accentClay : 'transparent'}`, paddingBottom: '4px', textDecoration: 'none' }}>
              Artisan Center
            </Link> */}
          </div>
        </div>

        <div className="d-flex align-items-center gap-1 gap-sm-2">
          {/* Shop Now Button as a Link */}
          <Link to="/Storefront" className="btn rounded-pill px-4 text-white d-none d-md-inline-block shadow-sm me-2 navbar-shop-now-btn" style={{ backgroundColor: primaryEarth, fontSize: '13px', fontWeight: '600', border: 'none', transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)', textDecoration: 'none' }}>
            Shop Now
          </Link>
{/* User/Login Link */}

 
  <Link to="/login" className="btn p-2 border-0 icon-btn-custom" style={{ color: primaryEarth }}>
    <User size={24} />
  </Link>

          {/* Shopping Bag */}
            <div className="cart-badge">
          <Link to="/Cart">
              <button 
        className="btn p-2 border-0 position-relative icon-btn-custom" 
        style={{ color: totalCount > 0 ? accentClay : primaryEarth }} // Change color if not empty
      >
        <ShoppingBag size={24} />
        
        {/* Only show the badge if there are items */}
        {totalCount > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
                style={{ fontSize: '0.7rem' }}>
            {totalCount}
          </span>
        )}
      </button>
              </Link>
      
    </div>

        </div>
      </div>
      
      <style>{`
        .nav-item-custom:hover { color: ${accentClay} !important; }
        .navbar-shop-now-btn:hover { background-color: ${accentClay} !important; transform: translateY(-1px); }
      `}</style>
    </nav>
  );
}