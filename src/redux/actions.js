
import {
    fetchProductsFromDatabase,
    fetchProductsByIdFromDatabase,
    saveProductToDatabase,
    updateProductInDatbase,
    deleteProductFromDatabase,
    searchProductsByNameFromDatabase,
    searchProductsByBrandFromDatabase,
} from '../data/dataUtil'

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



// Obtener todos los productos
export const getPoducts = () => {
    return async function (dispatch) {
        try {
            // llamada a la base de datos
            const products = await fetchProductsFromDatabase();
            dispatch({ type: GET_PRODUCTS, payload: products });
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
};

// Obtener un producto por su ID
export const getProductById = (productId) => {
    return async function (dispatch) {
        try {
            // llamada a la base de datos
            const product = await fetchProductsByIdFromDatabase(productId);
            dispatch({ type: GET_PRODUCTS_BY_ID, payload: product});
        } catch (error) {
            console.error('Error fetching product by ID:', error);
        }
    };
};

export const searchProductsByName = (productName) => {
    return async function (dispatch) {
        try {
            const products = await searchProductsByNameFromDatabase(productName);
            dispatch({ type: SEARCH_PRODUCTS_BY_NAME, payload: products});
        } catch (error) {
            console.error('Ese producto no existe:', error)
        }
    }
}

// buscar producto por marca
export const searchProductsByBrand = (brand) => {
    return async function (dispatch) {
        try {
            const products = await searchProductsByBrandFromDatabase(brand);
            dispatch({ type: SEARCH_PRODUCTS_BY_BRAND, payload: products})
        } catch (error) {
            console.error('Esa marca de producto no existe:', error)
        }
    }
}

// Crear un nuevo producto
export const createProduct = (productData) => {
    return async function (dispatch) {
        try {
            const createdProduct = await saveProductToDatabase(productData);
            dispatch({ type: CREATE_PRODUCT, payload: createdProduct});
        } catch (error) {
            console.error('Error creando producto:', error);
        }
    };
};

// Actualizar un producto existente
export const updateProduct = (productId, updatedProductData) => {
    return async function (dispatch) {
        try {
            const updatedProduct = await updateProductInDatbase(productId, updateProduct);
            dispatch({ type: UPDATE_PRODUCT, payload: updatedProduct });
        } catch (error) {
            console.error('Error actualizando producto:', error);
        }
    };
};

// Eliminar un producto
export const deleteProduct = (productId) => {
    return async function (dispatch) {
        try {
            await deleteProductFromDatabase(productId);
            dispatch({ type: DELETE_PRODUCT, dispatch: productId});
        } catch (error) {
            console.error('Error eliminando producto:', error);
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



