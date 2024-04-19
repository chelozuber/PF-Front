import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../Search/searchBar';
import FilterAndOrder from '../FilterAndOrder/filterAndOrder';

const Navbar = () => {
  return (
    <nav>
      <div className="left">
        <Link to="/">HenryTech</Link>
      </div>
      <div className="center">
        <SearchBar />
      </div>
      <div className="right">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/cart">Cart</Link>
      </div>
      <div className="bottom">
        <FilterAndOrder />
      </div>
    </nav>
  );
}

export default Navbar;