import { combineReducers } from "redux";
import ProductsReducer from "./productReducer";
import PriceReducer from "./priceReducer";
import CategoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
  products: ProductsReducer,
  price: PriceReducer, 
  category: CategoryReducer
})

export default rootReducer;