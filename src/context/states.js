let cartInit = { products: [] };

let userInit = {
  pending: false,
  error: {},
  loggedIn: false,
  info: { fullName: "stranger" },
  wishlist: [],
};

let productsInit = {
  pending: true,
  error: {},
  inView: {},
  all: [],
  results: [],
  filter: {
    categories: [],
    title: "",
    price: 0,
    attributes: [],
  },
};

export { cartInit, userInit, productsInit };
