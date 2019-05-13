import { CHANGE_CATEGORY} from "../actions";

const initialState = {
  products: [],
  category: '',
  page: 1,
  price: '',
  
}

export default function(state = initialState, action) {
    switch (action.type) {
      case CHANGE_CATEGORY:
        return {...state, category: action.payload}; 
      default:
        return state;
    }
}