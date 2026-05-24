import React from 'react';
import { useCart } from '../context/CartContext';
import { IoTrashOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
export default function Cart() {
  const primaryEarth = '#2c1a11';
  const accentClay = '#c85a32';

  const { cartItems, removeFromCart,updateQuantity } = useCart();
  
  const totalPrice = cartItems.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);

  if (cartItems.length === 0) {
    return <div className="text-center py-5">
        <h3 className="mb-4">Your cart is empty.</h3>
        <Link to="/storefront" className="btn rounded-pill px-4 text-white d-none d-md-inline-block shadow-sm me-2 navbar-shop-now-btn" style={{ backgroundColor: primaryEarth, fontSize: '13px', fontWeight: '600', border: 'none', transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)', textDecoration: 'none' }}>
          Continue Shopping
        </Link>
      </div>
  }

  return (
    <div className="container py-5">
      <h2>Shopping Cart</h2>
      <div className="row mt-4">
        <div className="col-lg-8">
          {cartItems.map((item) => (
            <div key={item.id} className="d-flex align-items-center mb-3 border-bottom pb-3">
              <img src={item.img} alt={item.title} style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
              <div className="ms-4 flex-grow-1">
                <h5>{item.title}</h5>
                <p className="mb-0">{item.price} EGP x {item.quantity}</p>
              </div>
              <div className="d-flex align-items-center">
  {/* Minus Button */}
  <button 
    className="btn btn-outline-secondary btn-sm" 
    onClick={() => updateQuantity(item.id, -1)}
  >
    -
  </button>

  {/* Quantity Display */}
  <span className="mx-3 fw-bold">{item.quantity}</span>

  {/* Plus Button */}
  <button 
    className="btn btn-outline-secondary btn-sm" 
    onClick={() => updateQuantity(item.id, +1)}
  >
    +
  </button>
</div>
              <button className="btn btn-outline-danger" onClick={() => removeFromCart(item.id)}>
                <IoTrashOutline />
              </button>
            </div>
          ))}
        </div>
        
        {/* Summary Box */}
        <div className="col-lg-4">
          <div className="card p-4">
            <h4>Order Summary</h4>
            <div className="d-flex justify-content-between mt-3">
              <span>Total:</span>
              <span className="fw-bold">{totalPrice.toFixed(2)} EGP</span>
            </div>
            <button className="btn btn-dark w-100 mt-4">Proceed to Checkout</button>
          </div>
        </div>
      </div>
        
      <style>{`
        .nav-item-custom:hover { color: ${accentClay} !important; }
        .navbar-shop-now-btn:hover { background-color: ${accentClay} !important; transform: translateY(-1px); }
      `}</style>
    </div>
  );
}