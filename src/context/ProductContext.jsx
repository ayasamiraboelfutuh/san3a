import { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  
  const [products, setProducts] = useState([]);
  const [aiRecommendations, setAiRecommendations] = useState(null);

  return (
    <ProductContext.Provider value={{ products, setProducts, aiRecommendations, setAiRecommendations }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);