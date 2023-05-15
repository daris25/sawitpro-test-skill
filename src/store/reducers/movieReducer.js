const initialState = {
  movieFetch: false,
  movieResponse: {},
  movieError: "",
};

const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "MOVIE":
      return {
        ...state,
        movieFetch: true,
        movieParam: payload,
        type,
      };
    case "MOVIE_SUCCESS":
      return {
        ...state,
        movieFetch: false,
        movieResponse: payload?.data,
        type,
      };
    case "MOVIE_FAILED":
      return {
        ...state,
        movieFetch: false,
        movieError: payload,
        type,
      };

    default:
      return state;
  }
};

export default movieReducer;
