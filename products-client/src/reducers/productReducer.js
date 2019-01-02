import { FETCH_PRODUCTS } from "../actions";

const defaultState = {
    products: [],
    page: 1,
    price: '',
    category: ''
}

export default function(state=defaultState, action){
    switch (action.type) {
        case FETCH_PRODUCTS:
            return action.payload.data;
        default:
            return state;
        }
    };