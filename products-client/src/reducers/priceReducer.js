import { CHANGE_PRICE } from "../actions";

// const initialState = {
//     products: [],
//     category: '',
//     page: 1,
//     price: '',
//   }

export default function(state = null, action) {
    switch (action.type) {
      case CHANGE_PRICE:
        return {...state, price: action.payload}; 
      default:
        return state;
    }
}

