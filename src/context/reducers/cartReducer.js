function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      if (action.payload) {
        if (
          state.products.filter(
            (product) => action.payload.title == product.title
          ).length > 0
        ) {
          state.products.filter(
            (product) => action.payload.title == product.title
          )[0].quantity++;
          return state;
        } else {
          state.products.push({ ...action.payload, quantity: 1 });
          return state;
        }
      } else {
        return new Error("NO PAYLOAD FOUND!");
      }
    case "ADD_QUANTITY":
      if (action.payload) {
        state.products.filter(
          (product) => action.payload.title == product.title
        )[0].quantity++;
        return state;
      } else {
        return new Error("NO PAYLOAD FOUND!");
      }
    case "REDUCE_QUANTITY":
      if (action.payload) {
        state.products.filter(
          (product) => action.payload.title == product.title
        )[0].quantity--;

        if (
          state.products.filter(
            (product) => action.payload.title == product.title
          )[0].quantity === 0
        ) {
          return {
            ...state,
            products: state.products.filter(
              (product) => action.payload.title !== product.title
            ),
          };
        } else {
          return state;
        }
      } else {
        return new Error("NO PAYLOAD FOUND!");
      }
  }
}

export default cartReducer;
