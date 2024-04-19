import React, { useState } from 'react';

const FilterAndOrder = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showBrands, setShowBrands] = useState(false);

  const handleCategoryClick = (category) => {
    console.log(`Filtramos por categoría: ${category}`);
  };

  const handleBrandClick = (brand) => {
    console.log(`Filtramos por marca: ${brand}`);
  };

  const handleBestSellersClick = () => {
    console.log('Productos más vendidos');
  };

  const handleMostPopularClick = () => {
    console.log('Productos más populares');
  };

  return (
    <div className="filter-and-order">
      <div className="filter">
        <div className="category-filter">
          <span onClick={() => setShowCategories(!showCategories)}>Categorías</span>
          {showCategories && (
            <div className="category-options">
              <div onClick={() => handleCategoryClick('Electrónicos')}>Electrónicos</div>
              <div onClick={() => handleCategoryClick('Ropa')}>Ropa</div>
              <div onClick={() => handleCategoryClick('Hogar')}>Hogar</div>
            </div>
          )}
        </div>
        <div className="brand-filter">
          <span onClick={() => setShowBrands(!showBrands)}>Marcas</span>
          {showBrands && (
            <div className="brand-options">
              <div onClick={() => handleBrandClick('Nike')}>Nike</div>
              <div onClick={() => handleBrandClick('Adidas')}>Adidas</div>
              <div onClick={() => handleBrandClick('Samsung')}>Samsung</div>
            </div>
          )}
        </div>
      </div>
      <div className="order">
        <span onClick={handleBestSellersClick}>Más vendidos</span>
        <span onClick={handleMostPopularClick}>Más populares</span>
      </div>
    </div>
  );
};

export default FilterAndOrder;