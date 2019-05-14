import { FETCH_PRODUCTS } from "../actions";

const initialState = {
  products: [],
  category: '',
  page: 1,
  price: '',
  
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload.data;
    default:
      return state;
  }
}

