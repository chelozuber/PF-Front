import React from 'react';
import Product from '../Product/product';
// import style from './productList.module.css';

const ProductList = ({ products }) => {
    return (
        <div>
            {products.map((product) => {
                return (
                    <Product 
                        key={product.id}
                        id={product.id}
                        img={product.img}
                        name={product.name}
                        brand={product.brand}
                        description={product.description}
                        price={product.price}
                        rating={product.rating}
                    />
                )
            })}
        </div>
    )
}

export default ProductList;