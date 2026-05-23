// src/HowItWorks.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Camera, Sparkles, Grid } from 'lucide-react';

export default function HowItWorks() {
  const primaryEarth = '#2c1a11';
  const accentClay = '#c85a32';

  // Intersection Observer to trigger scroll animation
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Resets when scrolling away so it can replay
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // AI Suggestion Engine Steps
  const aiSteps = [
    {
      id: 1,
      icon: <Camera size={28} style={{ color: accentClay }} />,
      title: "1. Upload Your Room",
      desc: "Snap a quick photo of your empty corner, wall, or living room space and upload it into our Vision AI selector."
    },
    {
      id: 2,
      icon: <Sparkles size={28} style={{ color: accentClay }} />,
      title: "2. Smart Aesthetic Analysis",
      desc: "Our AI scans the colors, lighting, and existing design layout of your room to understand its specific design DNA."
    },
    {
      id: 3,
      icon: <Grid size={28} style={{ color: accentClay }} />,
      title: "3. Get Curated Matches",
      desc: "Instantly view a tailored list of authentic pottery, rugs, or woodwork suggestions that are guaranteed to look beautiful in your space."
    }
  ];

  return (
    <div style={{ backgroundColor: '#EBD2AD' }}>
    <div className="container my-5 py-5 overflow-hidden" ref={sectionRef} >
      
      {/* SECTION HEADER */}
      <div className={`text-center mb-5 animate__animated ${isVisible ? 'animate__fadeInDown' : 'opacity-0'}`}>
        <span className="text-uppercase tracking-wider fw-bold" style={{ color: accentClay, fontSize: '12px', letterSpacing: '1.5px' }}>
          Vision AI Studio
        </span>
        <h2 className="display-6 fw-bold mt-1" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: primaryEarth }}>
          How to Find the Perfect Craft
        </h2>
        <div className="mx-auto mt-2 rounded" style={{ width: '60px', height: '3px', backgroundColor: accentClay }}></div>
      </div>

      {/* 3-STEP GRID */}
      <div className="row g-4 justify-content-center position-relative">
        {aiSteps.map((step, index) => (
          <div key={step.id} className="col-12 col-md-4 position-relative">
            
            {/* Step Card with staggered scroll delays */}
            <div 
              className={`p-4 h-100 rounded-4 text-center step-card-interactive border animate__animated ${
                isVisible ? 'animate__fadeInUp' : 'opacity-0'
              }`}
              style={{ 
                backgroundColor: '#ffffff',
                borderColor: 'rgba(44, 26, 17, 0.06)',
                animationDelay: isVisible ? `${index * 0.2}s` : '0s', 
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {/* Icon Circle */}
              <div 
                className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4 mt-2 icon-box"
                style={{ 
                  width: '65px', 
                  height: '65px', 
                  backgroundColor: 'rgba(200, 90, 50, 0.06)',
                  transition: 'all 0.3s ease'
                }}
              >
                {step.icon}
              </div>

              {/* Content */}
              <h4 className="fw-bold fs-5 mb-2" style={{ color: primaryEarth }}>
                {step.title}
              </h4>
              <p className="text-muted small m-0 px-2" style={{ lineHeight: '1.6' }}>
                {step.desc}
              </p>
            </div>

          </div>
        ))}
      </div>

      {/* Micro-interactions Styling */}
      <style>{`
        .step-card-interactive:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(44, 26, 17, 0.06) !important;
          border-color: rgba(200, 90, 50, 0.2) !important;
        }
        .step-card-interactive:hover .icon-box {
          background-color: ${accentClay} !important;
          transform: scale(1.05);
        }
        .step-card-interactive:hover .icon-box svg {
          color: #ffffff !important;
        }
        .opacity-0 {
          opacity: 0;
        }
      `}</style>
    </div>
    </div>
  );
}