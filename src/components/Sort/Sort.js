
const Sort = ({ onSortOptionChange }) => {
  const handleSortOptionChange = (option) => {
    onSortOptionChange(option);
    
  };

  return (
    <div className="sorting-dropdown">
      <label htmlFor="sort">Sort by:</label>
      <select
        id="sort"
        onChange={(e) => handleSortOptionChange(e.target.value)}
      >
        <option value="alphabetical-ascending">Alphabetical A-Z</option>
        <option value="alphabetical-descending">Alphabetical Z-A</option>
        <option value="price-ascending">Price (Low to High)</option>
        <option value="price-descending">Price (High to Low)</option>
      </select>
    </div>
  );
};

export default Sort;