import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
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
      price: 140,
      ratings: 5,
      image: 'product2.jpg', 
    },
    {
      id: 3,
      name: 'b',
      description: 'This is the description of Product 2.',
      price: 150,
      ratings: 5,
      image: 'product2.jpg', 
      category: 'Shoes',
    },
    {
      id: 4,
      name: 'a',
      description: 'This is the description of Product 2.',
      price: 160,
      ratings: 5,
      image: 'product2.jpg', 
      category: 'Shoes',
    },
    {
      id: 4,
      name: 'a',
      description: 'This is the description of Product 2.',
      price: 160,
      ratings: 5,
      image: 'product2.jpg', 
      category: 'Bags',
    },
    
  ];

 
  const [selectedCategory, setSelectedCategory] = useState('Bags'); // Default category is "Bags"
  const [sortOption, setSortOption] = useState('alphabetical-ascending'); // Default sorting option

  // Function to handle category change when clicking on the header
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Function to handle sorting option change
  const handleSortOptionChange = (option) => {
    setSortOption(option);
  };

  // Function to get the filtered and sorted products based on category and sort option
  const getFilteredAndSortedProducts = () => {
    const filteredProducts = products.filter(
      (product) => product.category === selectedCategory
    );

    switch (sortOption) {
      case 'alphabetical-ascending':
        return filteredProducts.slice().sort((a, b) => a.name.localeCompare(b.name));
      case 'alphabetical-descending':
        return filteredProducts.slice().sort((a, b) => b.name.localeCompare(a.name));
      case 'price-ascending':
        return filteredProducts.slice().sort((a, b) => a.price - b.price);
      case 'price-descending':
        return filteredProducts.slice().sort((a, b) => b.price - a.price);
      default:
        return filteredProducts;
    }
  };

  const sortedProducts = getFilteredAndSortedProducts();

  return (
    <div className="App">
      <Header
        onCategoryChange={handleCategoryChange}
        onSortOptionChange={handleSortOptionChange}
      />
      {/* Product Grid */}
      <div className="product-grid">
        {sortedProducts.map((product) => (
          <ProductTile key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
