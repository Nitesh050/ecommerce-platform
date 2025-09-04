import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  const { name, price, description, image } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p className="price">${price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
