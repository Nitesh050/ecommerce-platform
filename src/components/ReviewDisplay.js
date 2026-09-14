import React from 'react';

const ReviewDisplay = ({ review }) => {
  return (
    <div className="review-display">
      <div dangerouslySetInnerHTML={{ __html: review.body }} />
    </div>
  );
};

export default ReviewDisplay;
