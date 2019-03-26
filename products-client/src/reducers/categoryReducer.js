import { SORT_CATEGORY } from "../actions";

const initialState = {
  products: [],
  page: 1,
  category: "Automative",
  price: ''
  
}

export default function(state = initialState, action) {
    const {type} = action;
    switch (type) {
      case SORT_CATEGORY:
      return action.payload; 
      default:
      return state;
    }
  }
