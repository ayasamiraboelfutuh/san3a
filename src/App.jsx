import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';
import Inventory from './pages/Inventory';
import Orders from './pages/Orders';
import Marketplace from './pages/Marketplace';
import ArtisanDashboard from './pages/ArtisanDashboard';
import Storefront from './pages/Storefront';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import { productService } from './services/productService';
import { CartProvider } from './context/CartContext';
import Cart from './pages/Cart'
import VisionPage from './pages/VisionPage';
import { ProductProvider } from './context/ProductContext';
import { AuthProvider } from './context/AuthContext';
import RegisterArtisan from './pages/RegisterArtisan';
import RegisterCustomer from './pages/RegisterCustomer';
import SellerRoute from './Components/auth/SellerRoute';

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService.getAllProducts().then(setProducts);
  }, []);

  return (
    <AuthProvider>
    <ProductProvider>
    <CartProvider>
      <Router>
        <Routes>
          {/* Routes with Navbar & Footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Marketplace products={products} />} />
            <Route path="/storefront" element={<Storefront />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/vision" element={<VisionPage />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path='/register' element={<Register/>}/> */}
            <Route path="/register" element={<RegisterCustomer />} />
            <Route path="/register-artisan" element={<RegisterArtisan />} />
          </Route>

          {/* Routes without Navbar & Footer */}
         <Route element={<SellerRoute><DashboardLayout /></SellerRoute>}>
    <Route path="/artisan-dashboard" element={<ArtisanDashboard />} />
    <Route path="/artisan-orders" element={<Orders />} />
    <Route path="/artisan-inventory" element={<Inventory />} />
</Route>
<Route path="*" element={<div className="container mt-5"><h1>404 - Page Not Found</h1></div>} />
        </Routes>
      </Router>
    </CartProvider>
    </ProductProvider>
    </AuthProvider>
  );
}