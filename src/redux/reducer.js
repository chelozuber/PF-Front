import {
    GET_PRODUCTS,
    GET_PRODUCTS_BY_ID,
    CREATE_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    FILTER_BY_CATEGORY,
    FILTER_BY_BRAND,
    SORT_BY_POPULARITY,
    SORT_BY_PRICE_ASC,
    SORT_BY_PRICE_DESC,
    SEARCH_PRODUCTS_BY_NAME
} from './actions';

const initialState = {
    products: [],
    selectedProduct: null,
    filteredProducts: [],
    searchResults: [],
    filter: {
        category: null,
        brand: null,
        sortBy: null
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                filteredProducts: action.payload
            };
        case GET_PRODUCTS_BY_ID:
            return {
                ...state,
                selectedProduct: action.payload
            };
        case CREATE_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
                filteredProducts: [...state.products, action.payload]
            };
            case UPDATE_PRODUCT:
                return {
                    ...state,
                    products: state.products.map(product =>
                        product.id === action.payload.id ? action.payload : product
                    ),
                    filteredProducts: state.filteredProducts.map(product =>
                        product.id === action.payload.id ? action.payload : product
                    ),
                    selectedProduct: action.payload
                };
            case DELETE_PRODUCT:
                return {
                    ...state,
                    products: state.products.filter(product => product.id !== action.payload),
                    filteredProducts: state.filteredProducts.filter(product => product.id !== action.payload),
                    selectedProduct: null
                };
            case FILTER_BY_CATEGORY:
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        category: action.payload
                    }
                };
            case FILTER_BY_BRAND:
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        brand: action.payload
                    }
                };
            case SORT_BY_POPULARITY:
                // ordenar los productos por popularidad
                return state;
            case SORT_BY_PRICE_ASC:
                // ordenar los productos por precio ascendente
                return state;
            case SORT_BY_PRICE_DESC:
                // ordenar los productos por precio descendente
                return state;
            case SEARCH_PRODUCTS_BY_NAME:
                return {
                    ...state,
                    searchResults: action.payload
                };
            default:
                return {...state};
        }
    };
    
    export default reducer;

