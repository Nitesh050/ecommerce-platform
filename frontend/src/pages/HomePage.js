import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

const HomePage = ({ onAddToCart }) => {
  return (
    <main className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </main>
  );
};

export default HomePage;
