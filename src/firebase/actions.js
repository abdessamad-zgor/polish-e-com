import { db, auth, analytics } from "./index";
import firebase from "firebase";

const getAllProducts = async function () {
  return db
    .collection("products")
    .get()
    .then((snapshot) => {
      let products = [];
      snapshot.forEach((doc) => products.push({ ...doc.data(), id: doc.id }));
      return products;
    });
};

const getProductReviews = async function (id) {
  return db
    .collection("products")
    .doc(id)
    .collection("reviews")
    .get()
    .then((snapshot) => {
      let reviews = [];
      snapshot.forEach((review) =>
        reviews.push({ ...review.data(), id: review.id })
      );
      return reviews;
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};

const addProductReviews = async function (author, review, id) {
  const productRef = db.collection("products").doc(id);
  let date = Date.now();

  return productRef
    .collection("reviews")
    .doc()
    .set({
      userName: author.fullName,
      avatar: author.avatar || "",
      review: review,
      publishedAt: date,
    })
    .then(() => {
      return productRef
        .collection("reviews")
        .where("publishedAt", "==", date)
        .then((snapshot) => {
          let review;
          snapshot.forEach((doc) => review.push({ ...doc.data() }));
          return review;
        })
        .catch((err) => {
          throw new Error(err.message);
        });
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};

const getUserInfo = async function (id) {
  console.log("user");
  const userRef = db.collection("users").doc(id);
  return userRef.get().then((snapshot) => {
    let user = snapshot.data();
    return user;
  });
};

const signUpUser = async function (data) {
  return auth
    .createUserWithEmailAndPassword(data.email, data.password)
    .then((result) => {
      db.collection("users").doc(result.user.uid).set({
        uid: result.user.uid,
        fullName: data.fullName,
        email: data.email,
        phoneNumber: data.phone,
      });
      console.log(result);
      return result;
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};
const loginUser = async function (data) {
  return auth
    .signInWithEmailAndPassword(data.email, data.password)
    .then((UserCredential) => {
      return getUserInfo(UserCredential.user.uid);
    });
};

//Facebook-login: create FacebookAuthProvider instance and return a promise with the signInWithPop results

const facebookLogin = async function () {
  let provider = new firebase.auth.FacebookAuthProvider();
  return auth.signInWithPopup(provider);
};

//Google-login: create GoogleAuthProvider instance and return a promise with the signInWithPopup method results

const googleLogin = async function () {
  let provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope("email");
  provider.addScope("profile");
  return auth.signInWithPopup(provider);
};

const getOrders = async (uid) => {
  return db.collection("users").doc(uid).collection("orders").get();
};

//check-user: check if user info is in the Firestore database if the user is new then a new userInfo instance will be created with the login results provided with Google or Facebook Login

const checkUser = async (payload) => {
  const userRef = db.collection("users").where("email", "==", payload.email);

  return userRef
    .get()
    .then((snapshot) => {
      let user = [];
      snapshot.forEach((doc) => user.push({ ...doc.data(), id: doc.id }));
      console.log(user);
      if (user.length > 0) {
        return user;
      } else {
        const userRef = db.collection("users").doc(payload.id);
        return userRef
          .set({ fullName: payload.name, email: payload.email })
          .then(() => {
            return userRef.get().then((doc) => {
              if (!doc.exists) {
                console.log("no such user");
              } else {
                return doc.data();
              }
            });
          })
          .catch((err) => {
            throw new Error(err.message);
          });
      }
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};

const putOrder = async (uid, payload) => {
  let userRef = db.collection("users").doc(uid);
  return userRef
    .collection("orders")
    .doc()
    .set({
      status: "pending",
      ...payload,
    })
    .then()
    .catch((err) => {
      throw new Error(err.message);
    });
};

const updateUserInfo = async (uid, payload) => {
  let userRef = db.collection("users").doc(uid);

  return userRef
    .get()
    .then((doc) => {
      if (doc.data() !== payload) {
        console.log("userInfo is not up to date");
        return userRef
          .set(payload)
          .then(async () => {
            return userRef.get().then((doc) => {
              return doc.data();
            });
          })
          .catch((err) => {
            throw new Error(err.message);
          });
      } else {
        return doc.data();
      }
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};

const updateWishlist = async (uid, payload) => {
  let userRef = db.collection("users").doc(uid);

  return userRef
    .collection("wishlist")
    .doc("wishlist")
    .set(
      {
        wishlist: payload,
      },
      {
        merge: true,
      }
    )
    .catch((err) => {
      throw new Error(err.message);
    });
};

const getAllCategories = async () => {
  return db
    .collection("products")
    .doc("categories")
    .get()
    .then((snapshot) => {
      return snapshot.data().values;
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};

export {
  getAllProducts,
  getOrders,
  getProductReviews,
  addProductReviews,
  signUpUser,
  loginUser,
  getUserInfo,
  checkUser,
  putOrder,
  facebookLogin,
  googleLogin,
  updateUserInfo,
  updateWishlist,
  getAllCategories,
};
