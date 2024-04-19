import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProductList from "../ProductList/productList";
import NotFound from "../NotFound/notFound";
import style from "./Pagination.module.css";

const Pagination = () => {
  const allProducts = useSelector((state) => state.products);
  const [page, setPage] = useState(1);
  const productsPerPage = 8;
  const [loading, setLoading] = useState(false);
  const [endOfProducts, setEndOfProducts] = useState(false);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5 && !loading && !endOfProducts) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, endOfProducts]);

  const currentProducts = allProducts.slice(0, page * productsPerPage);

  useEffect(() => {
    if (currentProducts.length >= allProducts.length) {
      setEndOfProducts(true);
    }
  }, [currentProducts, allProducts]);

  return (
    <div>
      <div className={style.main}>
        {/* No necesitamos los botones de paginación */}
      </div>
      <div>
        {allProducts.length === 0 ? (
          <NotFound />
        ) : (
          <ProductList products={currentProducts} />
        )}
        {loading && <p>Loading...</p>}
        {endOfProducts && <p>No more products to load</p>}
      </div>
    </div>
  );
};

export default Pagination;