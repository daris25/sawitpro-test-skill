import { store } from "../index";

export const cartMoviesFetch = async (data) => {
  store.dispatch({
    type: "CART",
    payload: data,
  });
  try {
    store.dispatch({
      type: "CART_SUCCESS",
      payload: data,
    });
  } catch (error) {
    store.dispatch({
      type: "CART_FAILED",
      payload: "error fetch",
    });
  }
};
