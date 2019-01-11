import axios from "axios";

export const FETCH_PRODUCTS = "fetch_Products";

export const fetchProducts = (page = 1) => {
   return async dispatch => {
       try {
        const productsRes = await fetch('http://localhost:8000/products');
        const products = await productsRes.json();

        return dispatch({
            type: FETCH_PRODUCTS,
            payload: products
        })
       } catch (error) {
        console.error(error)
       }
    
    }
}
