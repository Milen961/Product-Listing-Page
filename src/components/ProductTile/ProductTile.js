import React from "react";

const ProductTile = ({ product }) => {
    const { image, name, description, price, discountedPrice, ratings } = product;
  
    const handleAddToCart = () => {
      // need to replace with logic
      alert('Product added to cart');
    };
  
    return (
      <div className="product-tile">
    
        <img src={image} alt={name} />
  
        
        <h3 className="product-name">{name}</h3>
  
        
        <p className="product-description">{description}</p>
  
      
        {discountedPrice ? (
          <div>
            <span className="discounted-price">${discountedPrice}</span>{' '}
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
  
       
        <button onClick={handleAddToCart} className="add-to-cart-button">
          Add to Cart
        </button>
      </div>
    );
  };
  
  export default ProductTile;