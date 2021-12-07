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
  getUserInfo,
} from "../../firebase/actions";
//import analytics
import {
  logAddInfoEvent,
  logLoginEvent,
  logRegisterEvent,
  logSetOrderEvent,
} from "../../firebase/analytics/events";

const loginUserGetter = async (payload) => {
  try {
    const user = await loginUser(payload);
    logLoginEvent();
    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

const signUpUserGetter = async (payload) => {
  try {
    const userCredential = await signUpUser(payload);
    logRegisterEvent();
    const user = await getUserInfo(userCredential.user.uid);
    return { user, userCredential };
  } catch (err) {
    throw new Error(err.message);
  }
};

const facebookLoginGetter = async () => {
  return facebookLogin()
    .then((res) => {
      logLoginEvent();
      return res;
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};

const googleLoginGetter = async () => {
  return googleLogin()
    .then((res) => {
      logLoginEvent();
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
  return putOrder(uid, payload).then(() => {
    logSetOrderEvent();
  });
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

const updateUserInfoGetter = async (loggedIn, uid, payload) => {
  try {
    if (loggedIn) {
      logAddInfoEvent();
      let user = await updateUserInfo(uid, payload);
      return user;
    }
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

const updateWishlistGetter = async (loggedIn, uid, payload) => {
  try {
    if (loggedIn) {
      await updateWishlist(uid, payload);
    }
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
