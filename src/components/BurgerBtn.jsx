import React from 'react';

const BurgerBtn = ({ toggleMenu, isOpen }) => {
  return (
    <div className="burger-menu lg:hidden" onClick={toggleMenu}>
      <div className={isOpen ? 'line line1 open' : 'line line1'}></div>
      <div className={isOpen ? 'line line2 open' : 'line line2'}></div>
      <div className={isOpen ? 'line line3 open' : 'line line3'}></div>
    </div>
  );
};

export default BurgerBtn;
