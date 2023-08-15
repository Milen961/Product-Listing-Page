import { useState } from "react";


const ProductTile = ({ product }) => {
  const { image, name, description, price, discountedPrice, ratings } = product;
  const [showCartMessage, setShowCartMessage] = useState(false);

  const CartMessage = ({ onClose }) => {
    return (
      <div className="cart-message">
        <p>Product added to cart!</p>
        <button onClick={onClose}>Close</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    setShowCartMessage(true);
  };

  const handleCloseCartMessage = () => {
    setShowCartMessage(false);
  };

  return (
    <div className="product-tile">
      <img className="product-img" src={image} alt={name} />
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        {discountedPrice ? (
          <div className="price-container">
            <span className="discounted-price">${discountedPrice}</span>{" "}
            <span className="original-price">${price}</span>
          </div>
        ) : (
          <span className="price">${price}</span>
        )}
        <div className="ratings">
          {Array.from({ length: ratings }).map((_, index) => (
            <span key={index} className="star">&#9733;</span>
          ))}
        </div>
        <button onClick={handleAddToCart}className="add-to-cart-button">
          Add to Cart
        </button>
        {showCartMessage && <CartMessage onClose={handleCloseCartMessage} />}
        
      </div>
      
    </div>
  );
};

export default ProductTile;
