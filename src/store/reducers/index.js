import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  movie: movieReducer,
  cart: cartReducer,
});
