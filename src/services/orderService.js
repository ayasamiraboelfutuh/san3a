// export const orderService = {
//   // This will eventually save to your database/backend
//   addToCart: async (product) => {
//     console.log("Adding to cart (Ready for API):", product);
//     // Future: return await fetch(`${API_URL}/cart`, { method: 'POST', ... });
    
//     // For now, we save to localStorage so the cart persists across pages
//     const cart = JSON.parse(localStorage.getItem('cart') || '[]');
//     cart.push(product);
//     localStorage.setItem('cart', JSON.stringify(cart));
    
//     return { success: true };
//   }
// };