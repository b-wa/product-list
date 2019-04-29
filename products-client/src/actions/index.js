import axios from "axios";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const NEXT_PAGE = "NEXT_PAGE";
export const CHANGE_CATEGORY = "CHANGE_CATEGORY"
export const CHANGE_PRICE = "CHANGE_PRICE";

// export const fetchProducts = (category, page, price) => {
//    return async dispatch => {
//        try {
//         const productsRes = await fetch('http://localhost:8000/products');
//         const products = await productsRes.json(category, page, price);

//         return dispatch({
//             type: FETCH_PRODUCTS,
//             payload: products
//         })
//        } catch (error) {
//         console.error(error)
//        }
    
//     }
// };

export const fetchProducts = (category, page, price) => {
    const product = axios.get('http://localhost:8000/products', {params: {
        category, page, price
    }})
    return {
        type: FETCH_PRODUCTS,
        payload: product
    }
};


export const nextPage = (page) => {
    return {
        type: NEXT_PAGE,
        payload: page
    }
};

export const changeCategory = (category) => {
    return {
        type: CHANGE_CATEGORY,
        payload: category
    }
};

export const changePrice = (price) => {
    return {
        type: CHANGE_PRICE,
        payload: price
    }
};