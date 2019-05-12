import { FETCH_PRODUCTS } from "../actions";

// const initialState = {
//   products: [],
//   category: '',
//   page: 1,
//   price: '',
  
// }

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
    //console.log(action.payload.data)
      return action.payload.data;
    default:
      return state;
  }
}

