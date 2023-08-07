import React from 'react';
import Sort from '../Sort/Sort';

const Header = ({ onCategoryChange, onSortOptionChange }) => {
  return (
    <header className="header">
    
      <div className="logo">
      
        <img src="logo.svg" alt="Logo" />
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

