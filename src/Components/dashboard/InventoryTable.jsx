import React from 'react';

export default function InventoryTable({ products, handleEdit, handleDelete, primaryEarth }) {
  return (
    <div className="w-100">
      <h4 className="fw-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: primaryEarth }}>
        Live Workshop Catalog
      </h4>
      
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr className="text-muted small border-bottom">
              <th>Image</th>
              <th>Details</th>
              <th>Price</th>
              <th>Stock</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} style={{ height: '75px' }}>
                <td>
                  <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }} />
                </td>
                <td className="fw-bold">{product.name}</td>
                <td className="text-success fw-bold">{product.price} EGP</td>
                <td className="text-muted">{product.stock}</td>
                <td>
                  <div className="d-flex justify-content-center gap-2">
                    <button onClick={() => handleEdit(product)} className="btn btn-sm btn-outline-primary rounded-pill">Edit</button>
                    <button onClick={() => handleDelete(product.id)} className="btn btn-sm btn-outline-danger rounded-pill">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}