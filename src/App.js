import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
//import ProductCounter from './components/ProductCounter/ProductCounter';

import ProductTile from './components/ProductTile/ProductTile';

function App() {
 
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is the description of Product 1.',
      price: 100,
      discountedPrice: 80,
      ratings: 4,
      image: 'product1.jpg', 
      category: 'Bags',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is the description of Product 2.',
      price: 150,
      ratings: 5,
      image: 'product2.jpg', 
      category: 'Shoes',
    },
    // Add more products here
  ];

  const [selectedCategory, setSelectedCategory] = useState('Bags'); // Default category is "Bags"

 
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

 
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <Header onCategoryChange={handleCategoryChange} />
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductTile key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;