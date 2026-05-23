// src/services/productService.js
import { initialProducts } from '../data';
// const BASE_URL = 'https://dummyjson.com';
const USE_API = false;
export const productService = {
  getAllProducts: async () => {
    if (USE_API) {
      // Future: Real API Call
      const response = await fetch('https://your-real-api.com/products');
      return await response.json();
    } else {
      // Present: Return static data
      return [...initialProducts];
    }
  },

  addProduct: async (newProduct) => {
    if (USE_API) {
      // Future: Real POST Request
      const response = await fetch('https://your-real-api.com/products/add', {
        method: 'POST',
        body: JSON.stringify(newProduct)
      });
      return await response.json();
    } else {
      // Present: Mocked response
      return { ...newProduct, id: Date.now() };
    }
  },
  getProductById: async (id) => {
    // In the future, this would be: 
    // const response = await fetch(`${BASE_URL}/products/${id}`);
    
    // For now (Static Data):
    return initialProducts.find(p => p.id === parseInt(id));
  },
  // Add this to your productService object
analyzeRoom: async (imageFile) => {
  // This simulates the AI/Backend call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        style: "Boho",
        recommendedCategories: ["Kilim", "Pottery"]
      });
    }, 1500);
  });
}
};

  // addProduct: async (newProduct) => {
  //   try {
  //     const response = await fetch(`${BASE_URL}/products/add`, {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         title: newProduct.name,
  //         price: newProduct.price,
  //         category: newProduct.category,
  //         // Add other fields as needed
  //       })
  //     });
  //     return await response.json();
  //   } catch (error) {
  //     console.error("Add Product Error:", error);
  //     throw error;
  //   }
  // }
