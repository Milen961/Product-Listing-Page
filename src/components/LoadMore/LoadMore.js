import React from 'react';

const LoadMore = ({ onLoadMore, isAllLoaded }) => {
  return (
    <div className="load-more">
      {!isAllLoaded ? (
        <button onClick={onLoadMore}>Load More</button>
      ) : (
        <p>All products loaded</p>
      )}
    </div>
  );
};

export default LoadMore;