function productReducer(state, action) {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return {
        ...state,
        all: action.payload,
        pending: false,
      };
    case "GET_ALL_PRODUCTS_ERROR":
      return {
        ...state,
        pending: false,
        error: action.payload,
      };

    case "ADD_PRODUCT_REVIEWS":
      console.log(action.payload);
      return {
        ...state,
        inView: {
          ...state.inView,
          reviews: action.payload,
        },
        pending: false,
      };

    case "SET_PRODUCT_INVIEW":
      console.log(action.payload);
      return {
        ...state,
        inView: action.payload,
        pending: false,
      };

    case "SET_PRODUCT_INVIEW_INIT":
      return {
        ...state,
        pending: true,
      };
    case "UPDATE_PRODUCT_REVIEW":
      return {
        ...state,
        inView: {
          ...state.inView,
          reviews: [...state.inView.review, action.payload],
        },
      };
    default:
      return state;
  }
}

export default productReducer;
