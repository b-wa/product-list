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
    console.log(action.payload.data)
      return {...state, products: action.payload.data.products};
    default:
      return state;
  }
}
