import React from 'react';
import '../styles/ProductCard.css';
import { formatPrice } from '../utils/currency';
import reviews from '../data/reviews';
import ProductReview from './ProductReview';

const ProductCard = ({ product, onAddToCart }) => {
  const { id, name, price, description, image } = product;
  const productReviews = reviews.filter((review) => review.productId === id);

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
        <span className="price">{formatPrice(price)}</span>
      </div>
      <div className="button-container">
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
      {productReviews.length > 0 && (
        <div className="product-reviews">
          {productReviews.map((review) => (
            <ProductReview key={review.id} review={review} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
