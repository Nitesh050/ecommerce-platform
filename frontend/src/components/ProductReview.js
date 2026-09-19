import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import '../styles/ProductReview.css';

const formatTimestamp = (date) => new Date(date).toLocaleDateString();

const ProductReview = ({ review }) => {
  const sanitizedBody = DOMPurify.sanitize(review.body);

  return (
    <div className="review-display">
      <span className="review-date">{formatTimestamp(review.createdAt)}</span>
      <div dangerouslySetInnerHTML={{ __html: sanitizedBody }} />
    </div>
  );
};

ProductReview.propTypes = {
  review: PropTypes.shape({
    createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]).isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
};

export default ProductReview;
