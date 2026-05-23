import React, { useRef, useState, useEffect } from 'react';
import ProductCard from '../ProductCard'; // Import the individual card component

export default function Product({ products, handleAddToCart }) {
  const gridRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.05 });
    
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  if (!products || products.length === 0) return <div className="text-center py-5">Loading...</div>;

  return (
    <div className="container my-5" ref={gridRef}>
      {/* Editorial Header Section */}
<div className="text-center mb-5 mt-5">
  <h2 className="display-6 fw-bold" style={{ color: '#2c1a11' }}>
    The Artisan Collection
  </h2>
  <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
    Discover handcrafted masterpieces, each telling a unique story of Egyptian tradition and contemporary design.
  </p>
  
</div>
      <div className="row g-3">
        {products.map((product, index) => (
          <div key={product.id} className="col-12 col-sm-6  col-md-6  col-lg-4" >
            <div className={`${isVisible ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}
                 style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard product={product} handleAddToCart={handleAddToCart} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}