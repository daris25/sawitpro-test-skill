import { api } from "./index";

const getMovie = (data) => {
  return api.get(`/films`);
};

export { getMovie };
