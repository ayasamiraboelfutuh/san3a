import React, { useEffect, useState, useMemo } from 'react';
import { productService } from '../services/productService';
import Product from '../Components/home/Product';
import SidebarCatogry from '../Components/SidebarCatogry';
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { useProducts } from '../context/ProductContext';

export default function Storefront() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  
  // 1. Get products and AI state from Context
  const { products, setProducts, aiRecommendations } = useProducts();

  // 2. Fetch data only if empty
  useEffect(() => {
    if (products.length === 0) {
      productService.getAllProducts().then(data => {
        setProducts(data);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  // 3. Combined Filter Logic: This does NOT destroy your category filter
  const displayProducts = useMemo(() => {
    let result = products;

    // Layer 1: Apply AI filter if active
    if (aiRecommendations) {
      result = result.filter(p => aiRecommendations.includes(p.id));
    }

    // Layer 2: Apply Category filter on top of the AI results
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category?.toLowerCase() === activeCategory.toLowerCase());
    }

    return result;
  }, [products, aiRecommendations, activeCategory]);

  // 4. Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, aiRecommendations]);

  // 5. Pagination calculations: USE displayProducts here!
  const totalPages = Math.ceil(displayProducts.length / itemsPerPage);
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = displayProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const categories = ['All', ...new Set(products.filter(p => p.category).map(p => p.category))];

  // if (loading) return ( /* ... keep your loading spinner code ... */ );

  return (
    <div className="storefront-page container-fluid py-5">
      <div className="row">
        <div className="col-12 col-md-3">
          <SidebarCatogry
            categories={categories} 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
          />
        </div>

        <div className="col-12 col-md-9">
          {/* AI Banner */}
          {aiRecommendations && (
            <div className="alert alert-info">
              Showing filtered results based on your room scan.
            </div>
          )}

          {currentProducts.length > 0 ? (
            <>
              <Product products={currentProducts} />
              {/* Pagination controls using totalPages */}
            </>
          ) : (
            <div className="text-center">
              <h4>No products found.</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}