import axios from 'axios';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_BY_ID = 'GET_PRODUCTS_BY_ID';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY';
export const FILTER_BY_BRAND = 'FILTER_BY_BRAND';
export const SORT_BY_POPULARITY = 'SORT_BY_POPULARITY';
export const SORT_BY_PRICE_ASC = 'SORT_BY_PRICE_ASC';
export const SORT_BY_PRICE_DESC = 'SORT_BY_PRICE_DESC';
export const SEARCH_PRODUCTS_BY_NAME = 'SEARCH_PRODUCTS_BY_NAME';
export const SEARCH_PRODUCTS_BY_BRAND = 'SEARCH_PRODUCTS_BY_BRAND';

const BASE_URL = 'http://localhost:3001';


// Obtener todos los productos
export const getProducts = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`${BASE_URL}/products`);
            const products = response.data;
            dispatch({ type: GET_PRODUCTS, payload: products });
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
};


// Obtener un producto por su ID
export const getProductById = (id) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`${BASE_URL}/products/${id}`);
            const product = response.data;
            dispatch({ type: GET_PRODUCTS_BY_ID, payload: product });
        } catch (error) {
            console.error('Error fetching product by ID:', error);
        }
    };
};

export const searchProductsByName = (productName) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`${BASE_URL}/products?name=${productName}`);
            const products = response.data;
            dispatch({ type: SEARCH_PRODUCTS_BY_NAME, payload: products });
        } catch (error) {
            console.error('Error searching products by name:', error);
        }
    };
};

// buscar producto por marca
export const searchProductsByBrand = (brand) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`${BASE_URL}/products?brand=${brand}`);
            const products = response.data;
            dispatch({ type: SEARCH_PRODUCTS_BY_BRAND, payload: products });
        } catch (error) {
            console.error('Error searching products by brand:', error);
        }
    };
};

// Crear un nuevo producto
export const createProduct = (productData) => {
    return async function (dispatch) {
        try {
            const response = await axios.post(`${BASE_URL}/products`, productData);
            const newProduct = response.data;
            dispatch({ type: CREATE_PRODUCT, payload: newProduct });
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };
};


// Actualizar un producto existente
export const updateProduct = (id, updatedProductData) => {
    return async function (dispatch) {
        try {
            const response = await axios.put(`${BASE_URL}/products/${id}`, updatedProductData);
            const updatedProduct = response.data;
            dispatch({ type: UPDATE_PRODUCT, payload: updatedProduct });
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };
};

// Eliminar un producto
export const deleteProduct = (id) => {
    return async function (dispatch) {
        try {
            await axios.delete(`${BASE_URL}/products/${id}`);
            dispatch({ type: DELETE_PRODUCT, payload: id });
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };
};

// Filtrar por categoria
export const filterByCategory = (category) => {
    return {
        type: FILTER_BY_CATEGORY,
        payload: category,
    };
};

// Filtrar por marca
export const filterByBrand = (brand) => {
    return {
        type: FILTER_BY_BRAND,
        payload: brand,
    };
};

// Ordenar por por mas vendido
export const sortByPopularity = () => {
    return {
        type: SORT_BY_POPULARITY,
    };
};

// Ordenar por precio ascendente
export const sortByPriceAsc = () => {
    return {
        type: SORT_BY_PRICE_ASC,
    };
};

// Ordenar por precio descendente
export const sortByPriceDesc = () => {
    return {
        type: SORT_BY_PRICE_DESC,
    };
};



// VER RUTAS DE OLIVER