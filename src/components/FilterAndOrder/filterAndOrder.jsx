// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import {
//     filterByCategory,
//     filterByBrand,
//     sortByPopularity,
//     sortByPriceAsc,
//     sortByPriceDesc,
// } from '../../redux/reducer';

// const FilterAndSort = () => {
//     const dispatch = useDispatch();

//     const handleFilterByBrand = (brand) => {
//         dispatch(filterByBrand(brand));
//     };

//     const handleFilterByCategory = (category) => {
//         dispatch(filterByCategory(category));
//     };

//     const handleSortByPopularity = () => {
//         dispatch(sortByPopularity());
//     }
//     const handleSortByPriceAsc = () => {
//         dispatch(sortByPriceAsc());
//     };

//     const handleSortByPriceDesc = () => {
//         dispatch(sortByPriceDesc());
//     };

//     return (
//         <div>
//           <h2>Filter and Sort</h2>
//           <button onClick={() => handleFilterByBrand()}>Brands</button>
//           <button onClick={() => handleFilterByCategory()}>Categories</button>
//           <button onClick={handleSortByPopularity}>Popularidad</button>
//           <button onClick={handleSortByPriceAsc}>+ Precio</button>
//           <button onClick={handleSortByPriceDesc}>- Precio</button>
//         </div>
//       );
// }

// // ver el e.target.value