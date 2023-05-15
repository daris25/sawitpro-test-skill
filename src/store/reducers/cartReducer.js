const initialState = {
  cartFetch: false,
  cartResponse: [],
  cartError: "",
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CART":
      return {
        ...state,
        cartFetch: true,
        type,
      };
    case "CART_SUCCESS":
      return {
        ...state,
        cartFetch: false,
        cartResponse: payload,
        type,
      };
    case "CART_FAILED":
      return {
        ...state,
        cartFetch: false,
        cartError: payload,
        type,
      };

    default:
      return state;
  }
};

export default cartReducer;
