// src/OurStory.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Heart, Globe } from 'lucide-react';

export default function OurStory() {
  const primaryEarth = '#2c1a11'; // Deep Espresso Brown
  const accentClay = '#c85a32';  // Terracotta Orange
  const desertSand = '#EBD2AD';  // Desert Sand Accent

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to trigger animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Resets when scrolling away, or remove for one-time animation
        }
      },
      { threshold: 0.15 } // Triggers when 15% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-5 overflow-hidden" ref={sectionRef}>
      <div className="container py-4">
        <div className="row g-5 align-items-center">
          
          {/* LEFT COLUMN: Narrative Text (Slides up smoothly) */}
          <div className={`col-12 col-md-6 text-start animate__animated ${
            isVisible ? 'animate__fadeInLeft' : 'opacity-0'
          }`} style={{ transition: 'all 0.6s ease' }}>
            
            <span className="text-uppercase tracking-wider fw-bold small d-inline-flex align-items-center gap-1.5 mb-2" style={{ color: accentClay, fontSize: '11px', letterSpacing: '1.5px' }}>
              <Heart size={12} /> Preserving Egyptian Heritage
            </span>
            <h2 className="display-6 fw-bold mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: primaryEarth, lineHeight: '1.2' }}>
              From Generational Hands <br />to Next-Gen Spaces
            </h2>
            <div className="rounded mb-4" style={{ width: '50px', height: '3px', backgroundColor: accentClay }}></div>
            
            <p className="text-muted small lh-lg mb-3">
              Deep within the historical alleyways of Old Cairo, Giza, and Fustat, master Egyptian artisans have spent generations perfecting their crafts. From hand-thrown terracotta pottery to intricately woven kilim textiles, each masterpiece carries a unique story of cultural survival and timeless identity.
            </p>
            <p className="text-muted small lh-lg mb-4">
              <strong>San3A</strong> was born out of a deep responsibility to ensure these legacy workshops aren't left behind in a digital world. By bridging the gap between authentic, ancestral human creativity and intelligent Vision AI matching, we bring timeless Nile craftsmanship directly into modern living spaces worldwide.
            </p>

            {/* Quick Micro Stats Highlights */}
            <div className="row g-3 pt-2">
              <div className="col-6">
                <div className="d-flex align-items-center gap-2">
                  <div className="p-2 rounded-circle d-flex align-items-center justify-content-center story-icon-wrapper" style={{ backgroundColor: 'rgba(200, 90, 50, 0.08)', color: accentClay }}>
                    <Globe size={16} />
                  </div>
                  <div>
                    <h6 className="fw-bold m-0 p-0" style={{ color: primaryEarth, fontSize: '14px' }}>100% Authentic</h6>
                    <span className="text-muted" style={{ fontSize: '11px' }}>Direct from Local Kilns</span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center gap-2">
                  <div className="p-2 rounded-circle d-flex align-items-center justify-content-center story-icon-wrapper" style={{ backgroundColor: 'rgba(59, 94, 85, 0.08)', color: '#3b5e55' }}>
                    <Heart size={16} />
                  </div>
                  <div>
                    <h6 className="fw-bold m-0 p-0" style={{ color: primaryEarth, fontSize: '14px' }}>Fair-Trade Built</h6>
                    <span className="text-muted" style={{ fontSize: '11px' }}>Empowering Families</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Layered Studio Graphic Cards (Fades and moves in from the right) */}
          <div className={`col-12 col-md-6 position-relative d-flex justify-content-center pt-4 pt-md-0 animate__animated ${
            isVisible ? 'animate__fadeInRight' : 'opacity-0'
          }`} style={{ animationDelay: '0.2s', transition: 'all 0.6s ease' }}>
            
            {/* Structural Background Canvas Panel decoration */}
            <div 
              className="position-absolute rounded-4 d-none d-sm-block background-canvas-delay"
              style={{
                width: '75%',
                height: '105%',
                backgroundColor: desertSand,
                opacity: '0.25',
                top: '-10px',
                right: '40px',
                zIndex: 0,
                transform: isVisible ? 'rotate(-3deg)' : 'rotate(0deg)',
                transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            ></div>

            {/* Main Visual Card Container Frame */}
            <div 
              className="p-4 bg-light border rounded-4 text-center shadow-sm position-relative story-visual-card"
              style={{ 
                maxWidth: '400px', 
                zIndex: 1, 
                backgroundColor: '#fbfaf7', 
                borderColor: 'rgba(44, 26, 17, 0.08)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <div className="d-flex justify-content-center gap-2 mb-3">
                <span className="badge rounded-pill px-2.5 py-1 text-muted transition-badge" style={{ border: '1px solid #EBD2AD', fontSize: '10px', fontWeight: '600', backgroundColor: '#fff' }}>#Pottery</span>
                <span className="badge rounded-pill px-2.5 py-1 text-muted transition-badge" style={{ border: '1px solid #EBD2AD', fontSize: '10px', fontWeight: '600', backgroundColor: '#fff' }}>#Woodwork</span>
                <span className="badge rounded-pill px-2.5 py-1 text-muted transition-badge" style={{ border: '1px solid #EBD2AD', fontSize: '10px', fontWeight: '600', backgroundColor: '#fff' }}>#Kilim</span>
              </div>
              
              <h5 className="fw-bold mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: primaryEarth }}>
                "Every craft has a heartbeat."
              </h5>
              <p className="text-muted small m-0 px-2 dynamic-italic-text" style={{ fontStyle: 'italic', fontSize: '12px' }}>
                Our system ensures that buying an item directly funds the preservation of the workshop that created it. By supporting this project, you keep history alive in the modern era.
              </p>

              <hr className="my-3 mx-auto" style={{ width: '40px', borderColor: accentClay, opacity: 0.5 }} />
              <span className="text-uppercase tracking-wider fw-bold text-muted" style={{ fontSize: '10px', letterSpacing: '1px' }}>
                San3A Studio Vision
              </span>
            </div>

          </div>

        </div>
      </div>

      {/* Embedded interactive micro-animations & resets */}
      <style>{`
        .opacity-0 {
          opacity: 0;
        }
        /* Card Hover Effect */
        .story-visual-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 30px rgba(44, 26, 17, 0.06) !important;
          border-color: ${accentClay} !important;
        }
        /* Badge highlight micro hover */
        .transition-badge {
          transition: all 0.20s ease;
        }
        .story-visual-card:hover .transition-badge {
          border-color: ${accentClay} !important;
          background-color: #fff !important;
        }
        /* Icon wrapper animation entry pop */
        .story-icon-wrapper {
          transition: transform 0.3s ease;
        }
        .story-icon-wrapper:hover {
          transform: scale(1.1) rotate(5deg);
        }
      `}</style>
    </section>
  );
}