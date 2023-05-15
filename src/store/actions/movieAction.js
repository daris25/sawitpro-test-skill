import { store } from "../index";
import { getMovie } from "../../apis";

export const getMovieFetch = async (data) => {
  store.dispatch({
    type: "MOVIE",
    payload: data,
  });
  try {
    const affect = await getMovie(data);
    store.dispatch({
      type: "MOVIE_SUCCESS",
      payload: affect,
    });
  } catch (error) {
    store.dispatch({
      type: "MOVIE_FAILED",
      payload: "error fetch",
    });
  }
};
