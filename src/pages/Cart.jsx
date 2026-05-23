import React from 'react';
import { useCart } from '../context/CartContext';
import { IoTrashOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
export default function Cart() {
  const { cartItems, removeFromCart,updateQuantity } = useCart();
  
  const totalPrice = cartItems.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);

  if (cartItems.length === 0) {
    return <div className="text-center py-5">
        <h3 className="mb-4">Your cart is empty.</h3>
        <Link to="/storefront" className="btn btn-primary px-4 py-2">
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
    </div>
  );
}