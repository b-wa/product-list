import axios from "axios";

const ROOT_URL = 'http://localhost:8000';

export const FETCH_PRODUCTS = "FETCH PRODUCTS";

export const fetchProducts = (page, price, category) => {
    const request = axios.get(`${ROOT_URL}/products`, {query: {page, price, category}})
    return {
        type: FETCH_PRODUCTS,
        payload: request
    }
};