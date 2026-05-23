// src/AiBanner.jsx
import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function AiBanner() {
  const primaryEarth = '#2c1a11'; // Deep Espresso Brown
  const accentClay = '#c85a32';  // Accent Clay Orange
  const desertSand = '#EBD2AD';  // Your signature Desert Sand color

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container my-5">
      <div 
        className="p-5 rounded-4 text-center text-md-start position-relative overflow-hidden shadow-sm"
        style={{ 
          backgroundColor: desertSand, 
          border: '1px solid rgba(44, 26, 17, 0.12)' 
        }}
      >
        <div className="row align-items-center g-4">
          
          {/* Left Side Info */}
          <div className="col-12 col-md-8">
            <span className="text-uppercase tracking-wider fw-bold small d-inline-flex align-items-center gap-1 mb-2" style={{ color: accentClay }}>
              <Sparkles size={14} /> Smart Craft Discovery
            </span>
            <h3 className="display-6 fw-bold mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: primaryEarth }}>
              Unsure which piece suits your home?
            </h3>
            <p className="m-0" style={{ maxWidth: '580px', color: 'rgba(44, 26, 17, 0.8)' }}>
              Let our Vision AI analyze your room's color palette and layout options to suggest the ideal handmade Egyptian masterpiece.
            </p>
          </div>
          
          {/* Right Button Side */}
          <div className="col-12 col-md-4 text-md-end">
            <button 
              onClick={handleScrollToTop}
              className="btn rounded-pill px-4 py-2.5 text-white border-0 cta-sand-btn shadow-sm"
              style={{ 
                backgroundColor: primaryEarth, 
                fontWeight: '600', 
                fontSize: '14px',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)' 
              }}
            >
              Try Vision AI Selector <ArrowRight size={16} className="ms-1" />
            </button>
          </div>

        </div>
      </div>

      {/* Button Hover Effects Optimized for Desert Sand */}
      <style>{`
        .cta-sand-btn:hover { 
          background-color: ${accentClay} !important; 
          transform: translateY(-3px); 
          box-shadow: 0 10px 20px rgba(200, 90, 50, 0.2) !important;
        }
        .cta-sand-btn:active {
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  );
}