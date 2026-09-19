import React from 'react';
import PropTypes from 'prop-types';

// Displays a single product review, including any rich-text formatting
// the reviewer added (bold, links, etc.) via the review editor.
const formatTimestamp = (date) => new Date(date).toLocaleDateString();

const ProductReview = ({ review }) => {
  return (
    <div className="review-display">
      <span className="review-date">{formatTimestamp(review.createdAt)}</span>
      <div dangerouslySetInnerHTML={{ __html: review.body }} />
    </div>
  );
};

export default ProductReview;
