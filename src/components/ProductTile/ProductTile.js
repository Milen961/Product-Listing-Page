import React from "react";

const ProductTile = ({ product }) => {
    const { image, name, description, price, discountedPrice, ratings } = product;
  
    const handleAddToCart = () => {
      // Replace this alert with the actual logic to add the product to the cart
      alert('Product added to cart');
    };
  
    return (
      <div className="product-tile">
        {/* Product Image */}
        <img src={image} alt={name} />
  
        {/* Product Name */}
        <h3 className="product-name">{name}</h3>
  
        {/* Short Description */}
        <p className="product-description">{description}</p>
  
        {/* Product Price */}
        {discountedPrice ? (
          <div>
            <span className="discounted-price">${discountedPrice}</span>{' '}
            <span className="original-price">${price}</span>
          </div>
        ) : (
          <span className="price">${price}</span>
        )}
  
        {/* Ratings */}
        <div className="ratings">
          {/* Assuming ratings is a number from 1 to 5 */}
          {Array.from({ length: ratings }).map((_, index) => (
            <span key={index} className="star">&#9733;</span>
          ))}
        </div>
  
        {/* Add to Cart Button */}
        <button onClick={handleAddToCart} className="add-to-cart-button">
          Add to Cart
        </button>
      </div>
    );
  };
  
  export default ProductTile;