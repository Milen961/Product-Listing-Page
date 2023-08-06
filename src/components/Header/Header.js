import React from 'react';

const Header = ({ onCategoryChange }) => {
  return (
    <header className="header">
    
      <div className="logo">
       
        <img src="logo.svg" alt="Logo" />
      </div>

     
      <nav className="nav-menu">
        <ul className="menu-list">
          <li onClick={() => onCategoryChange('Bags')}>
            Bags
          </li>
          <li onClick={() => onCategoryChange('Shoes')}>
            Shoes
          </li>
         
        </ul>
      </nav>
    </header>
  );
};

export default Header;