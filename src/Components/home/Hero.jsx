// src/HeroStaging.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 
export default function HeroStaging({ setCurrentView }) {
  const primaryEarth = '#2c1a11';
  const accentClay = '#c85a32';
const navigate = useNavigate();
  // 1. Create a reference to anchor onto our image wrapper box
  const sectionRef = useRef(null);
  // 2. State to force an animation restart whenever visibility changes
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the hero section enters the viewport (is visible)
        if (entry.isIntersecting) {
          // Incrementing the key forces React to completely unmount and remount 
          // the inner elements, re-firing the animate.css entry timelines from scratch!
          setAnimationKey(prev => prev + 1);
        }
      },
      { 
        threshold: 0.15 // Triggers when at least 15% of the section is visible on screen
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect(); // Clean up memory on unmount
  }, []);

  return (
    <div className="container my-5 py-4 overflow-hidden">
      <div className="row align-items-center g-5">
        
        {/* LEFT COLUMN: Text Content */}
        <div className="col-12 col-lg-5 text-start animate__animated animate__fadeInLeft">
          {/* ... keeping your text layout exactly the same ... */}
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill mb-3" style={{ backgroundColor: 'rgba(200, 90, 50, 0.08)', border: `1px solid rgba(200, 90, 50, 0.15)` }}>
            <Sparkles size={14} style={{ color: accentClay }} />
            <span style={{ color: accentClay, fontSize: '12px', fontWeight: '600' }}>San3A Vision AI Studio</span>
          </div>
          <h1 className="display-4 fw-bold mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: primaryEarth }}>Where Heritage Meets Next-Gen Technology</h1>
          <p className="fs-6 mb-4" style={{ color: '#6c757d' }}>Don't just view Egyptian crafts—interactively place them.</p>
          <button onClick={() => navigate('/vision')} 
      className="btn rounded-pill px-4 py-2.5 text-white border-0 primary-btn-hover" 
      style={{ backgroundColor: '#2c1a11' }}>Open Decorate Studio</button>
        </div>

        {/* ==========================================================================
           RIGHT COLUMN
           ========================================================================== */}
        <div className="col-12 col-lg-7" ref={sectionRef}>
          
          {/* The key={animationKey} forces everything inside to replay entry effects on scroll-up */}
          <div 
            key={animationKey} 
            className="position-relative mx-auto w-100 scroll-fade-exit" 
            style={{ maxWidth: '620px', height: '480px' }}
          >
            
            {/* 0. NEW BACKGROUND IMAGE: Sits behind, loads first */}
            <div 
              className="rounded-4 position-absolute animate__animated animate__zoomIn shadow-lg"
              style={{ top: '12%', left: '12%', width: '420px', zIndex: 1, animationDelay: '0s' }}
            >
              <img 
                src="https://img.magnific.com/free-photo/traditional-macrame-assortment-indoors_23-2149072827.jpg?t=st=1779210097~exp=1779213697~hmac=95d63b7f9bf5547c9af18e720133a8bf314ea6a650e001a4c47db99d12a0a6bf&w=740" 
                alt="Main Artisan Workshop Scene" 
                className="img-fluid rounded-4 object-fit-cover" 
                style={{ height: '300px', width: '100%' }}
              />
            </div>

            {/* 1. PRODUCT ONE: Ceramic Terracotta Vase (Pops immediately) */}
            <div 
              className="rounded-3 position-absolute animate__animated animate__backInDown shadow craft-card-interactive"
              style={{ top: '10px', left: '5%', width: '180px', zIndex: 3 }}
            >
              <img src="https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=400" alt="Clay Vase" className="rounded-3 object-fit-cover" style={{ height: '100%', width: '100%' }} />
            </div>

            {/* 2. PRODUCT TWO: Woven Macrame Wall Hanging (0.2s delay) */}
            <div 
              className="rounded-4 position-absolute animate__animated animate__backInDown shadow craft-card-interactive"
              style={{ top: '40px', right: '8%', width: '200px', zIndex: 2, animationDelay: '0.2s' }}
            >
              <img src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=400" alt="Woven Rug" className="img-fluid rounded-3 object-fit-cover" style={{ height: '100%', width: '100%' }} />
            </div>

            {/* 3. PRODUCT THREE: Hand-Carved Wooden Bowl (0.4s delay) */}
            <div 
              className="rounded-3 position-absolute animate__animated animate__backInUp shadow craft-card-interactive"
              style={{ bottom: '40px', left: '5%', width: '170px', zIndex: 4, animationDelay: '0.4s' }}
            >
              <img src="https://img.magnific.com/free-photo/crochet-plush-still-life_23-2151044883.jpg?w=1060" alt="Wooden Bowl" className="img-fluid rounded-3 object-fit-cover" style={{ height: '100%', width: '100%' }} />
            </div>

            {/* 4. PRODUCT FOUR: Patterned Ceramic Plate (0.6s delay) */}
            <div 
              className="rounded-3 position-absolute animate__animated animate__backInUp shadow craft-card-interactive"
              style={{ bottom: '80px', right: '18%', width: '170px', zIndex: 3, animationDelay: '0.6s' }}
            >
              <img src="https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=400" alt="Ceramic Plate" className="rounded-3 object-fit-cover" style={{ height: '100%', width: '100%' }} />
            </div>

          </div>
        </div>

      </div>

      <style>{`
        /* Keeping your standard smooth hover scaling logic perfectly safe */
        .craft-card-interactive { transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
        .craft-card-interactive:hover { transform: translateY(-8px) scale(1.04) !important; z-index: 20 !important; box-shadow: 0 25px 50px rgba(44, 26, 17, 0.18) !important; }
        .primary-btn-hover:hover { background-color: ${accentClay} !important; transform: translateY(-2px); }
        
        /* Your continuous scroll-fade engine */
        @supports (animation-timeline: scroll()) {
          .scroll-fade-exit {
            animation-timeline: scroll(root);
            animation-fill-mode: both;
            animation-range: exit 0% exit 40%;
            animation-name: slideUpAndOut;
          }
        }
        @keyframes slideUpAndOut {
          from { opacity: 1; transform: translateY(0) scale(1); }
          to { opacity: 0; transform: translateY(-60px) scale(0.95); }
        }
      `}</style>
    </div>
  );
}