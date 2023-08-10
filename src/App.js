
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductTile from './components/ProductTile/ProductTile';
import LoadMore from './components/LoadMore/LoadMore';
import Filter from './components/Filter/Filter';
import products from './components/Products/Products';
import ProductCounter from './components/ProductCounter/ProductCounter'; 

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Bags');
  const [sortOption, setSortOption] = useState('alphabetical-ascending');
  const [sortedProducts, setFilteredProducts] = useState(products);
  const [loadMoreClicked, setLoadMoreClicked] = useState(false);
  const [displayedProductCount, setDisplayedProductCount] = useState(5);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setFilteredProducts(products.filter((product) => product.category === category));
    setLoadMoreClicked(false); 
    setDisplayedProductCount(5); 
  };

  const handleSortOptionChange = (option) => {
    setSortOption(option);
  };

  const getSortedProducts = () => {
    switch (sortOption) {
      case 'alphabetical-ascending':
        return sortedProducts.slice().sort((a, b) => a.name.localeCompare(b.name));
      case 'alphabetical-descending':
        return sortedProducts.slice().sort((a, b) => b.name.localeCompare(a.name));
      case 'price-ascending':
        return sortedProducts.slice().sort((a, b) => a.price - b.price);
      case 'price-descending':
        return sortedProducts.slice().sort((a, b) => b.price - a.price);
      default:
        return sortedProducts;
    }
  };

  const displayedProducts = getSortedProducts().slice(0, displayedProductCount);

  const handleLoadMore = () => {
    setLoadMoreClicked(true);
    setDisplayedProductCount(displayedProductCount + 5);
  };

  const handleFilterChange = (filteredProducts) => {
    setFilteredProducts(filteredProducts);
    setLoadMoreClicked(false); 
    setDisplayedProductCount(5); 
  };

  return (
    <div className="App">
      <Header
        onCategoryChange={handleCategoryChange}
        onSortOptionChange={handleSortOptionChange}
      />

      <div className="product-container">
       <div className="filter-counter-container">
        {/* Filter */}
        <Filter products={products} onFilterChange={handleFilterChange} />

        {/* Product Counter */}
        <ProductCounter
          currentCount={displayedProductCount}
          totalCount={getSortedProducts().length}
        />
        </div>
    

        {/* Product Grid */}
        <div className="product-grid">
          {displayedProducts.map((product) => (
            <ProductTile key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Load More */}
      {!loadMoreClicked && displayedProductCount < getSortedProducts().length && (
        <LoadMore onLoadMore={handleLoadMore} />
      )}
      <Footer />
    </div>
  );
}

export default App;

