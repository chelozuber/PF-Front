import React from 'react';
import { Link } from 'react-router-dom';


const Product = ({ id, name, image, description, price, rating }) => {
  return (
    <div>
      <Link to={`/detail/${id}`}>
        <img src={image} alt={name} />
      </Link>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{price}</p>
        <p>Rating: {rating}</p>
        <button>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default Product;