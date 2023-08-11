
const ProductCounter = ({ currentCount}) => {
  return (
    <div className="product-counter">
      {`Showing ${currentCount} products`}
    </div>
  );
};

export default ProductCounter;