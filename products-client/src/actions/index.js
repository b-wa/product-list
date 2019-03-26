import axios from "axios";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const NEXT_PAGE = "NEXT_PAGE";
export const SORT_CATEGORY = "SORT_CATEGORY"
export const SORT_PRICE = "SORT_PRICE";

export const fetchProducts = () => {
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
};

// export const nextPage = (page) => {
//     return {
//         type: NEXT_PAGE,
//         payload: page
//     }
// };

export const sortCategory = (category) => {
    return {
        type: "SORT_CATEGORY",
        payload: category
    }
};

export const sortPrice = (price) => {
    return {
        type: "SORT_PRICE",
        payload: price
    }
};