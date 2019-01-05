import axios from "axios";

const ROOT_URL = 'http://localhost:8000';

export const fetchProductsRequest = () => ({
    type: 'FETCH_PRODUCTS_REQUEST',
});

export const fetchProductsSuccess = (product) => ({
    type: 'FETCH_PRODUCTS_SUCCESS',
    payload: product
});

export const fetchProductsError = (err) => ({
    type: 'FETCH_PRODUCTS_ERROR',
    payload: err
});

export const fetchProducts = (page, price, category) => {
    dispatch(fetchProductsRequest);
    return axios.get(`${ROOT_URL}/products`, {query: {page, price, category}})
        .then(
            (res) => {
                dispatch(fetchProductsSuccess(res.data));
            },
            (err) => {
                dispatch(fetchProductsError(err.toString()));
            }
        )
};