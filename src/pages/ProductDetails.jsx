import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productService } from '../services/productService';
import { useCart } from '../context/CartContext';

export default function ProductDetails() {
  const { id } = useParams(); // Get the ID from the URL
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

 useEffect(() => {
    // Call the service instead of the raw fetch
    productService.getProductById(id).then(data => setProduct(data));
  }, [id])

  if (!product) return <div>Loading details...</div>;

  return (
  <div className="container mt-5" style={{ maxWidth: '900px' }}> {/* Limit width here */}
  <div className="row align-items-center"> {/* Align items vertically in the middle */}
    
    {/* Left Column: Image */}
    <div className="col-md-5"> {/* Made slightly smaller */}
      <img src={product.img} className="img-fluid rounded shadow" alt={product.title} />
    </div>

    {/* Right Column: Text & Button */}
    <div className="col-md-7 ps-md-5"> {/* Add padding to separate from image */}
      <h1>{product.title}</h1>
      <p className="text-muted">{product.category}</p>
      <h3 style={{ color: '#c85a32' }}>{product.price} EGP</h3>
      <p className="mt-4">{product.description}</p>
      
      <div className="mb-4">
        {/* Your stars code here */}
        <div className="mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < Math.floor(product.rating) ? "text-warning" : "text-muted"}>
            ★
          </span>
        ))}
        <small className="ms-2 text-muted">({product.reviews?.length || 0} reviews)</small>
      </div>
      </div>

      <button className="btn btn-dark btn-lg w-100" onClick={() => addToCart(product)}>
        Add to Bag
      </button>
    </div>

  </div>
</div>
   
  );
}