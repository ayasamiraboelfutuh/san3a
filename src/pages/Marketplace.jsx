// src/pages/Marketplace.jsx
import React from 'react';
import Hero from '../Components/home/Hero';
import HowItWorks from '../Components/home/HowItWorks';
import Product from '../Components/home/Product';
import AiBanner from '../Components/home/AiBanner';
import OurStory from '../Components/home/OurStory';

export default function Marketplace({ setCurrentView, handleAddToCart,products }) {
  if (!products || products.length === 0) {
    return <div className="text-center py-5">Loading ...</div>;
  }
  return (
    <>
      <Hero setCurrentView={setCurrentView} />
      <HowItWorks />
      <Product products={products.slice(0,4)} handleAddToCart={handleAddToCart} />
      <AiBanner />
      <OurStory />
    </>
  );
}