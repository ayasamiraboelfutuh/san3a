// src/data.js
export const initialProducts = [
  { 
    id: 1, 
    name: "Ceramic Vase", 
    category: "Pottery", 
    price: "450", 
    reviews: [ // <--- IT MUST BE HERE
      { id: 101, stars: 5 },
      { id: 102, stars: 4 }
    ],
    stock: "12", 
    img: '../public/assets/img/Ceramic Vase.png'
  },
  { 
    id: 2, 
    name: "Handwoven Kilim", 
    category: "Kilim", 
    price: "1200", 
    reviews: [ // <--- IT MUST BE HERE
      { id: 101, stars: 5 },
      { id: 102, stars: 4 }
    ],
    stock: "3", 
    img: "../public/assets/img/Ceramic Vase.png" 
  },  {
    id: 3,
    name: "Traditional Handblown Amber Carafe",
    price: 550,
    reviews: [ // <--- IT MUST BE HERE
      { id: 101, stars: 5 },
      { id: 102, stars: 4 }
    ],
    category: "Glasswork",
    img: "../public/assets/img/zusease-glassworks-4179041_1920.png"
  },
  {
    id: 4,
    name: "Artisan Leather Messenger Satchel",
    price: 2400,
    reviews: [ // <--- IT MUST BE HERE
      { id: 101, stars: 5 },
      { id: 102, stars: 4 }
    ],
    category: "Leather",
    img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&auto=format&fit=crop&q=80"
  }
];