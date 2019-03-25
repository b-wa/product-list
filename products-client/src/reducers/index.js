import { combineReducers } from "redux";
import ProductsReducer from "./productReducer";
import PriceReducer from "./priceReducer";

const rootReducer = combineReducers({
  products: ProductsReducer,
  price: PriceReducer
})

export default rootReducer;