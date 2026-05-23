import React from 'react';
import { PlusCircle } from 'lucide-react';

export default function ProductForm({ newProduct, setNewProduct, handleAddProduct, editingId }) {
  return (
    <div className="card p-4 border-0 rounded-4 shadow-sm bg-light">
      <h4 className="fw-bold mb-3 d-flex align-items-center gap-2" style={{ color: '#2c1a11' }}>
        <PlusCircle size={20} style={{ color: '#c85a32' }} /> 
        {editingId ? "Edit Craft Details" : "List New Craft"}
      </h4>
      <form onSubmit={handleAddProduct}>
        <div className="mb-2">
          <label className="small fw-bold">Product Title</label>
          <input className="form-control" value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} required/>
        </div>
        <div className="mb-2">
          <label className="small fw-bold">Category</label>
          <select className="form-select" value={newProduct.category} onChange={e => setNewProduct({...newProduct, category: e.target.value})}>
            <option value="Pottery">Pottery & Ceramics</option>
            <option value="Kilim">Kilim & Textiles</option>
            <option value="Woodwork">Woodwork & Inlay</option>
          </select>
        </div>
        <div className="row g-2 mb-2">
          <div className="col-6"><label className="small fw-bold">Price (EGP)</label><input type="number" className="form-control" value={newProduct.price} onChange={e => setNewProduct({...newProduct, price: e.target.value})} required/></div>
          <div className="col-6"><label className="small fw-bold">Stock</label><input type="number" className="form-control" value={newProduct.stock} onChange={e => setNewProduct({...newProduct, stock: e.target.value})} required/></div>
        </div>
        <div className="mb-2">
          <label className="small fw-bold">Product Image</label>
          <input type="file" className="form-control" onChange={e => setNewProduct({...newProduct, image: URL.createObjectURL(e.target.files[0])})} required={!editingId}/>
        </div>
        <button type="submit" className="btn w-100 mt-3 rounded-pill text-white" style={{ backgroundColor: '#2c1a11' }}>
          {editingId ? "Save Changes" : "Publish to Live Catalog"}
        </button>
      </form>
    </div>
  );
}