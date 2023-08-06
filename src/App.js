import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
//import ProductCounter from './components/ProductCounter/ProductCounter';

import ProductTile from './components/ProductTile/ProductTile';

function App() {
  // Sample data for products, you can replace it with your actual data
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is the description of Product 1.',
      price: 100,
      discountedPrice: 80,
      ratings: 4,
      image: 'product1.jpg', // Replace with the actual image URL
      category: 'Bags',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is the description of Product 2.',
      price: 150,
      ratings: 5,
      image: 'product2.jpg', // Replace with the actual image URL
      category: 'Shoes',
    },
    // Add more products here
  ];

  const [selectedCategory, setSelectedCategory] = useState('Bags'); // Default category is "Bags"

  // Filter products based on the selected category
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  // Function to handle category change when clicking on the header
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <Header onCategoryChange={handleCategoryChange} />
      {/* Product Grid */}
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