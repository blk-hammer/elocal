import { combineReducers } from "redux";
import productReducer from "./productReducer";
import sellerReducer from "./sellerReducer";

export default combineReducers({
  product: productReducer,
  seller: sellerReducer,
});
