// src/pages/Inventory.jsx
import ProductForm from '../components/dashboard/ProductForm';
import InventoryTable from '../components/dashboard/InventoryTable';
import React, { useState } from 'react';

export default function Inventory() {
  // You move your "products" state and "handle" functions here
const [products, setProducts] = useState([
    { id: 1, name: 'Hand-Thrown Terracotta Vase', category: 'Pottery', price: 850, stock: 4, image: 'https://images.unsplash.com/photo-1616077168712-fc6c788bc4ee?q=80&w=300' }
  ]); 
   const handleEdit =(product) => { setEditingId(product.id);
     setNewProduct(product); };
  const handleDelete = (id) =>{ setProducts(products.filter(p => p.id !== id))};
 
   const [newProduct, setNewProduct] = useState({ name: '', category: 'Pottery', price: '', stock: '', image: '' });
   const [editingId, setEditingId] = useState(null);

const handleAddProduct = (e) => {
    e.preventDefault();
    if (editingId) {
      setProducts(products.map(p => p.id === editingId ? { ...newProduct, id: editingId } : p));
      setEditingId(null);
    } else {
      setProducts([{ ...newProduct, id: Date.now() }, ...products]);
    }
    setNewProduct({ name: '', category: 'Pottery', price: '', stock: '', image: '' });
  };

  return (
   <div className="p-4 d-flex flex-column gap-5">
      <h2 className="fw-bold">Inventory Management</h2>
      <ProductForm newProduct={newProduct} setNewProduct={setNewProduct} handleAddProduct={handleAddProduct} />
      <InventoryTable products={products} handleEdit={handleEdit} handleDelete={handleDelete} primaryEarth="#2c1a11" />
    </div>
  );
}