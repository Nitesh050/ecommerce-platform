import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  const { name, price, description, image } = product;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-details">
        <h2>{name}</h2>
        <p className="product-description">{description}</p>
      </div>
      <div className="price-container">
        <span className="price">{price.toLocaleString('en-IN')}</span>
      </div>
      <div className="button-container">
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
