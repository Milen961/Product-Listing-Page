import React from 'react';

const ProductCounter = ({ currentCount, totalCount }) => {
  return (
    <div className="product-counter">
      {`Showing ${currentCount} out of ${totalCount} products`}
    </div>
  );
};

export default ProductCounter;