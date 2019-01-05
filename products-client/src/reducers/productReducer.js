import { FETCH_PRODUCTS } from "../actions";

const defaultState = {
    hasFetched: false,
    isFetching: false,
    data: {
        products: [],
        page: 1,
        price: '',
        category: ''
    }
}

export default function(state=defaultState, action){
    switch (action.type) {
        case 'FETCH_PRODUCTS_REQUEST':
            return {
                ...state,
                isFetching: true
            };
        case 'FETCH_PRODUCTS_SUCCESS':
            const fetchProductData = action.payload;
            return {
                ...state,
                hasFetched: true,
                isFetching: false,
                data: {
                    ...fetchProductData
                },
                error: ""
            };
        case 'FETCH_PRODUCTS_ERROR':
            return { ...state, hasFetched: true, isFetching: false, error: action.payload };
        default:
            return state;
        }
    };