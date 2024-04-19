import React, { useEffect } from 'react';
import Navbar from '../../components/NavBar/navBar';
import Pagination from '../../components/Pagination/pagination';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div>
        <h1>Productos</h1>
        <Pagination />
      </div>
    </div>
  );
};

export default Home;