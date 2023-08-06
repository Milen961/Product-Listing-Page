import React from 'react';

const Header = ({ onCategoryChange }) => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        {/* Replace 'logo.svg' with your logo image file */}
        <img src="logo.svg" alt="Logo" />
      </div>

      {/* Navigational Menu */}
      <nav className="nav-menu">
        <ul className="menu-list">
          <li onClick={() => onCategoryChange('Bags')}>
            Bags
          </li>
          <li onClick={() => onCategoryChange('Shoes')}>
            Shoes
          </li>
          {/* Add more menu items for other categories if needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;