import React from 'react';
import { Link } from 'react-router-dom';
import { IoEyeOutline } from "react-icons/io5"; // Import the icon
import { useCart } from '../context/CartContext';
import ReviewStars from './ReviewStars';
export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const primaryEarth = '#2c1a11';
  const accentClay = '#c85a32';

  return (
    
    <div className=" h-100 shadow-sm border-0 position-relative overflow-hidden card-container bg-transparent" style={{ borderColor: '#c85a32' }}>
      
      {/* Image with Zoom Effect */}
      <Link to={`/product/${product.id}`} className="overflow-hidden d-block image-container" style={{ height: '300px' }}>
        <img src={product.img} alt={product.name} className="card-img-top w-100 h-100 object-fit-cover" />
        
      </Link>
      
      {/* Eye Icon */}
      <Link to={`/product/${product.id}`} className="btn btn-light position-absolute top-0 end-0 m-3 rounded-circle shadow-sm d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
        <IoEyeOutline size={20} />
      </Link>

      <div className="card-body p-4 text-center">
        <h5 className="fs-6  text-truncate" style={{ color: primaryEarth }}>{product.title}</h5>
        <span className="fw-bold" style={{ color: accentClay }}>{product.name}{product.price} EGP</span>
      </div>

      {/* Button is now permanently visible */}
      <div className="px-4 pb-4 text-left">
        <ReviewStars reviews={product.reviews} />
        <button className="btn w-100 rounded-pill" style={{ backgroundColor: primaryEarth, fontSize: '13px', fontWeight: '600', border: 'none', transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)', textDecoration: 'none',color:'white' }} onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
      
      <style>{`
        .card-container {
          transition: all 0.3s ease;
        }
        
        .nav-item-custom:hover { color: ${accentClay} !important; }
        .navbar-shop-now-btn:hover { background-color: ${accentClay} !important; transform: translateY(-1px); }
      

        /* Zoom effect stays active */
        .card-container:hover .image-container img {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  );
}