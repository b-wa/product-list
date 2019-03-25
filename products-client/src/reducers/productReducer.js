import { FETCH_PRODUCTS } from "../actions";

const initialState = {
  products: [],
  page: 1,
  category: '',
  price: "highest"
  
}

export default function(state = initialState, action) {
    const {type} = action;
    switch (type) {
      case FETCH_PRODUCTS:
        return {
          ...state,
          products: action.payload
        }  
      default:
        return state;
    }
  }
