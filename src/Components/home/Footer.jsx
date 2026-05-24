// src/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import RegisterArtisan from '../../pages/RegisterArtisan';
import { HashLink } from 'react-router-hash-link';
export default function Footer({ setCurrentView }) {
  const primaryEarth = '#2c1a11'; // Deep Espresso Brown
  const accentClay = '#c85a32';  // Accent Clay Orange
  const customGreenAccent = '#3b5e55'; // Custom Green Accent for Icons

  return (
    <footer 
      className="py-4 mt-5" 
      style={{ 
        backgroundColor: '#EBD2AD', // Your gorgeous new Desert Sand background
        borderTop: '1px solid rgba(44, 26, 17, 0.12)' // Clean espresso tint divider line
      }}
    >
      <div className="container">
        <div className="row g-3 align-items-center text-start">
          
          {/* COLUMN 1: Brand Info */}
          <div className="col-12 col-md-4">
            <h5 className="fw-bold m-0" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: primaryEarth, fontSize: '18px' }}>
              San3A<span style={{ color: accentClay }}>.</span>
            </h5>
            <p className="m-0 mt-1" style={{ fontSize: '11px', lineHeight: '1.4', color: 'rgba(44, 26, 17, 0.75)' }}>
              Linking traditional Egyptian heritage with smart Vision AI suggestions.
            </p>
          </div>

         {/* COLUMN 2: Navigation Links */}
<div className="col-12 col-md-4 text-md-center">
  <div className="d-flex flex-column align-items-center gap-2" style={{ fontSize: '11px', color: 'rgba(44, 26, 17, 0.75)' }}>
    <Link 
  to="/" 
  className="text-decoration-none footer-sand-link"
  onClick={() => {
    // 1. Update your view state
    setCurrentView('marketplace');
    
    // 2. Smoothly scroll to the very top (0,0)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }}
>
  Marketplace Studio
</Link>

    <HashLink 
  to="/#how-it-works" 
  smooth 
  className="text-decoration-none footer-sand-link"
>
  How It Works
</HashLink>
    
    {/* ADD THIS NEW LINK */}
    <Link to="/register-artisan" className="text-decoration-none footer-sand-link">
      Join as Artisan
    </Link>
  </div>
</div>

          {/* COLUMN 3: Compact Contact Info */}
          <div className="col-6 col-md-4 text-end">
            <ul className="list-unstyled d-flex flex-column align-items-end gap-1.5 m-0" style={{ fontSize: '11px', color: 'rgba(44, 26, 17, 0.75)' }}>
              <li className="d-flex align-items-center gap-1.5">
                <MapPin size={12} style={{ color: customGreenAccent }} />
                <span>Cairo, Egypt</span>
              </li>
              <li className="d-flex align-items-center gap-1.5">
                <Mail size={12} style={{ color: customGreenAccent }} />
                <a href="mailto:support@san3avision.ai" className="text-decoration-none footer-sand-link p-0" style={{ fontSize: '11px' }}>
                  support@san3avision.ai
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="mt-3 pt-3 border-top text-center" style={{ borderColor: 'rgba(44, 26, 17, 0.1)', fontSize: '10px', color: 'rgba(44, 26, 17, 0.6)' }}>
          <span>© 2026 San3A AI Studio. Faculty of CS  Project.</span>
        </div>
      </div>

      {/* Styled Interaction States over Desert Sand */}
      <style>{`
        .footer-sand-link {
          color: ${primaryEarth};
          font-weight: 600; /* Made slightly thicker for clean visibility over sand background */
          transition: color 0.2s ease;
        }
        .footer-sand-link:hover {
          color: ${accentClay} !important; /* Glows beautifully into Clay Orange on hover */
        }
      `}</style>
    </footer>
  );
}