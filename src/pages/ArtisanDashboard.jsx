import React from 'react';

export default function ArtisanDashboard(products) {
  return (
    <div className="container-fluid p-4">
      <h2 className="fw-bold mb-4">Welcome back, Artisan!</h2>
      <p className="text-muted">
        Select a section from the sidebar to manage your shop.
      </p>
      
      {/* quick summary cards here */}
      <div className="row g-3">
        <div className="col-md-4">
          <div className="card p-3 border-0 shadow-sm">
            <h5>Total Orders</h5>
            <p className="fs-3 fw-bold">1</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 border-0 shadow-sm">
            <h5>Total Products</h5>
            <p className="fs-3 fw-bold">{products.stock}2</p>
          </div>
        </div>
      </div>
    </div>
  );
}