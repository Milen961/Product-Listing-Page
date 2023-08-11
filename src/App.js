import React, { useState, useEffect } from 'react';
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
  useEffect(() => {
    const initialFilteredProducts = products.filter(
      (product) => product.category === selectedCategory
    );
    setFilteredProducts(initialFilteredProducts);
  }, [selectedCategory]);

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
    const productsInSelectedCategory = sortedProducts.filter(
      (product) => product.category === selectedCategory
    );
    const remainingProductsCount = productsInSelectedCategory.length - displayedProductCount;
    setDisplayedProductCount(displayedProductCount + Math.min(remainingProductsCount));
  };
  
  
  const handleFilterChange = (filteredProducts) => {
    setFilteredProducts(filteredProducts);
    setLoadMoreClicked(false);
    setDisplayedProductCount(filteredProducts.length);
  };

  return (
    <div className="App">
      <Header
        onCategoryChange={handleCategoryChange}
        onSortOptionChange={handleSortOptionChange}
      />
      <div className="product-container">
       <div className="filter-counter-container">
       
        <Filter products={products} onFilterChange={handleFilterChange} />

       
        <ProductCounter
          currentCount={displayedProductCount}
        />
        </div>
   
        <div className="product-grid">
          {displayedProducts.map((product) => (
            <ProductTile key={product.id} product={product} />
          ))}
        </div>
      </div>

    
      {!loadMoreClicked && displayedProductCount < getSortedProducts().length && (
        <LoadMore onLoadMore={handleLoadMore} />
      )}
      <Footer />
    </div>
  );
}

export default App;

