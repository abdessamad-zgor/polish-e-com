import { db, auth } from "./index";
import firebase from "firebase";

const facebookLogin = async function () {
  let provider = new firebase.auth.FacebookAuthProvider();
  return auth.signInWithPopup(provider);
};
const googleLogin = async function () {
  let provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope("email");
  provider.addScope("profile");
  return auth.signInWithPopup(provider);
};

const putOrder = async (uid, payload) => {
  let userRef = db.collection("users").doc(uid);
  return userRef
    .collection("orders")
    .doc()
    .set({
      status: "pending",
      products: payload.cart.products,
      orderedBy: payload.user,
      shippingAddress: payload.address,
    })
    .then()
    .catch((err) => {
      throw new Error(err.message);
    });
};

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

const updateUserInfo = async (uid, payload) => {
  let userRef = db.collection("users").doc(uid);

  return userRef
    .get()
    .then((doc) => {
      console.log(doc.data() !== payload);
      console.log(payload);
      if (doc.data() !== payload) {
        console.log("userInfo is not up to date");
        return userRef
          .set(payload)
          .then(async () => {
            return userRef.get().then((doc) => {
              console.log(doc.data());
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

const getOrders = async (uid) => {
  return db.collection("users").doc(uid).collection("orders").get();
};

export {
  facebookLogin,
  googleLogin,
  putOrder,
  checkUser,
  updateUserInfo,
  updateWishlist,
  getOrders,
};
