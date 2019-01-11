import axios from "axios";

import { FETCH_PRODUCTS } from "../actions/index";

export default function(state = {}, action) {
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