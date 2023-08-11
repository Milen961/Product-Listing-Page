import Sort from '../Sort/Sort';

const Header = ({ onCategoryChange, onSortOptionChange }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://img.freepik.com/free-vector/urban-shoes-logo_1051-1632.jpg" alt="Logo" />
      </div>
      <nav className="nav-menu">
        <ul className="menu-list">
          <li onClick={() => onCategoryChange('Bags')}>Bags</li>
          <li onClick={() => onCategoryChange('Shoes')}>Shoes</li>
        </ul>
      </nav>
      <Sort onSortOptionChange={onSortOptionChange} />
    </header>
  );
};


export default Header;