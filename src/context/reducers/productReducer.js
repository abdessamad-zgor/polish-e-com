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
    case "SET_FILTERS":
      return {
        ...state,
        filter: action.payload,
      };
    case "APPLY_FILTERS":
      let results = state.all.filter(
        (product) =>
          product.title.toLowerCase().includes(state.filter.title) ||
          // state.filter.categories.every((category) =>
          //   product.categories.includes(category)
          // ) ||
          // state.filter.attributes.every((attribute) =>
          //   product.attributes.includes(attribute)
          // ) &&
          product.price < parseInt(state.filter.price)
      );

      console.log(results);

      return {
        ...state,
        results: results,
      };
    case "FILTER_PRODUCTS":
      let resultsFiltered = state.all.filter((product) =>
        product.categories.includes(action.payload)
      );
      return {
        ...state,
        results: resultsFiltered,
      };

    default:
      return state;
  }
}

export default productReducer;
