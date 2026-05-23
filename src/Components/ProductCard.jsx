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
    // Ensure the card itself is a flex container
//       <div style={{ height: '300px' }}>
    <div className="card bg-transparent  shadow-sm border-0" style={{ borderColor: '#c85a32', height: '100%' }}>
  {/* No extra flex classes here, let the grid handle the height */}
  
  <div style={{ height: '300px' }}>
    <Link to={`/product/${product.id}`} className=" image-container overflow-hidden d-block w-100 h-100">
      <img src={product.img} className="w-100 h-100 object-fit-cover" />
    </Link>
  </div>
  <Link to={`/product/${product.id}`} className="btn eye-icon-btn position-absolute top-0 end-0 m-3 rounded-circle  d-flex align-items-center justify-content-center flex-grow-1 bg-transparent" >
         <IoEyeOutline size={20} />
      </Link>
  <div className="card-body p-4 text-left">
   <h5 className="fs-6  text-truncate" style={{ color: primaryEarth }}>{product.title}</h5>
       <span className="fw-bold" style={{ color: accentClay }}>{product.name}{product.price} EGP</span>
    
    {/* If this button isn't at the bottom, add a margin-top to it */}
    <div style={{ marginTop: 'auto' }}>
      <ReviewStars reviews={product.reviews} />
      <button className="btn w-100 rounded-pill" style={{ backgroundColor: primaryEarth, fontSize: '13px', fontWeight: '600', border: 'none', transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)', textDecoration: 'none',color:'white' }} onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  </div>
 <style>{`

       
       .image-container img {
           transition: transform 0.3s ease;
         }
         .image-container:hover img {
          transform: scale(1.05);
      }

      .eye-icon-btn {
  backdrop-filter: blur(5px);
 color:#c85a32;
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.eye-icon-btn:hover {
  transform: scale(1.1); /* Slightly grow on hover */
}
      `}</style>
</div>
  );
}