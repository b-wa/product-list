import { CHANGE_CATEGORY} from "../actions";

// const initialState = {
//   products: [],
//   category: '',
//   page: 1,
//   price: '',
  
// }

export default function(state = null, action) {
    switch (action.type) {
      case CHANGE_CATEGORY:
        return {...state, category: action.payload}; 
      default:
        return state;
    }
}