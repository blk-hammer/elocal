import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
// import signupReducer from "./signupReducer";

export default combineReducers({
  //   signup: signupReducer,
  form: formReducer,
});
