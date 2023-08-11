import  { useState } from 'react';

const Filter = ({ products, onFilterChange }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minRating, setMinRating] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false); 
  const handleApplyFilter = () => {
    const filteredProducts = products.filter((product) => {
      const meetsPriceCriteria =
        (minPrice === '' || product.price >= parseFloat(minPrice)) &&
        (maxPrice === '' || product.price <= parseFloat(maxPrice));
      
      const meetsRatingCriteria =
        minRating === '' || product.ratings >= parseInt(minRating);

      return meetsPriceCriteria && meetsRatingCriteria;
    });

    onFilterChange(filteredProducts);
    
  };

  const handleToggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  }

  
return (
  <div className={`filter ${isFilterOpen ? 'open' : ''}`}>
    <div className="filter-header" onClick={handleToggleFilter}>
      <h3>Filter</h3>
      <div className="filter-icon">{isFilterOpen ? '-' : '+'}</div>
    </div>
    <div className="filter-content">
      <label htmlFor="minPrice">Min Price:</label>
      <input
        type="number"
        id="minPrice"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />

<label htmlFor="maxPrice">Max Price:</label>
      <input
        type="number"
        id="maxPrice"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <label htmlFor="minRating">Min Rating:</label>
      <input
        type="number"
        id="minRating"
        value={minRating}
        onChange={(e) => setMinRating(e.target.value)}
      />
      <button onClick={handleApplyFilter}>Apply Filter</button>
    </div>
  </div>
);
};

export default Filter;