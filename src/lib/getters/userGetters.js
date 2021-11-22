import { useUser } from "../../context";
import {
  loginUser,
  putOrder,
  getOrders,
  checkUser,
  signUpUser,
  facebookLogin,
  googleLogin,
  updateUserInfo,
  getProductReviews,
  addProductReviews,
  updateWishlist,
} from "../../firebase/actions";

async function loginUserGetter() {
  const { userDispatch } = useUser();
  let info = await loginUser(data);
  if (info) {
    userDispatch({ type: "LOGIN_USER", payload: info });
  } else {
    userDispatch({ type: "LOGIN_ERROR", payload: info });
  }
}

async function signUpUserGetter() {
  const { userDispatch } = useUser();
  let info = await signUpUser(data);
  if (info) {
    userDispatch({ type: "SIGNUP_USER", payload: info });
  } else {
    userDispatch({ type: "SIGNUP_ERROR", payload: info });
  }
}

const facebookLoginGetter = async () => {
  return facebookLogin()
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};

const googleLoginGetter = async () => {
  return googleLogin()
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};

const checkUserGetter = async (payload) => {
  try {
    let user = await checkUser(payload);
    return user;
  } catch (err) {
    throw err;
  }
};

const getUserInfoGetter = async () => {};

const putOrderGetter = async (uid, payload) => {
  return putOrder(uid, payload);
};

const getOrdersGetter = async (uid) => {
  return getOrders(uid)
    .then((snapshot) => {
      let orders = [];
      snapshot.forEach((doc) => orders.push({ ...doc.data() }));
      return orders;
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};

const updateUserInfoGetter = async (uid, payload) => {
  try {
    let user = await updateUserInfo(uid, payload);
    return user;
  } catch (err) {
    throw err;
  }
};

const getProductReviewsGetter = async (id) => {
  try {
    let reviews = await getProductReviews(id);
    return reviews;
  } catch (err) {
    throw err;
  }
};

const addProductReviewsGetter = async (id, payload) => {
  try {
    const review = await addProductReviews(payload.author, payload.review, id);
    return review;
  } catch (err) {
    throw err;
  }
};

const updateWishlistGetter = async (uid, payload) => {
  try {
    await updateWishlist(uid, payload);
  } catch (err) {
    throw err;
  }
};

async function addToWishlistGetter() {
  const { userDispatch } = useUser();
}

async function removeFromWishlistGetter() {
  const { userDispatch } = useUser();
}

async function editOrderGetter() {
  const { userDispatch } = useUser();
}

export {
  loginUserGetter,
  signUpUserGetter,
  facebookLoginGetter,
  googleLoginGetter,
  checkUserGetter,
  getUserInfoGetter,
  putOrderGetter,
  getOrdersGetter,
  updateUserInfoGetter,
  addToWishlistGetter,
  removeFromWishlistGetter,
  editOrderGetter,
  getProductReviewsGetter,
  addProductReviewsGetter,
  updateWishlistGetter,
};
