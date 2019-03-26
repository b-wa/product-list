import { SORT_PRICE } from "../actions";

const initialState = {
    products: [],
    page: 1,
    category: '',
    price: "highest"
  }

export default function(state = initialState, action) {
    const {type} = action;
    switch (type) {
      case SORT_PRICE:
      return action.payload; 
      default:
      return state;
    }
}
