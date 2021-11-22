function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN_USER":
      // const user = loginUser(action.payload).then(() => {
      //   db.collection("users")
      //     .where("email", "==", `${action.payload.email}`)
      //     .get()
      //     .then((snapshot) => {
      //       snapshot.forEach((user) => {
      //         state.loggedIn = true;
      //         state.user = { ...user.data(), id: user.id };
      //       });
      //       console.log(snapshot);
      //     });
      // });
      // if (user) {
      //   return state;
      // } else {
      //   state.loggedIn = false;
      //   state.user = {};
      //   return state;
      // }
      state.pending = false;
      state.loggedIn = true;
      state.info = action.payload.user;
      return state;
    case "SIGNUP_USER":
    // const userCreate = signUpUser(action.payload);
    // if (userCreate) {
    //   (state.loggedIn = true), (state.user = action.payload);
    //   return state;
    // } else {
    //   (state.loggedIn = true), (state.user = {});
    //   return state;
    // }
    case "FACEBOOK_LOGIN_INIT":
      state.pending = true;
      state.error = null;
      state.loggedIn = false;
      return state;

    case "FACEBOOK_LOGIN":
      // facebookLogin().then((results) => {
      //   //error getting access token from facebook,
      //   state.loggedIn = true;
      //   state.user.fullName = results.user.profile.name;
      //   state.user.email = results.user.profile.email;
      //   state.user.id = results.user.profile.id;
      //   state.token = results.credential.accessToken;
      // });

      // return state;
      console.log(action.payload);

      state.pending = false;
      state.loggedIn = true;
      state.info.fullName = action.payload.additionalUserInfo.profile.name;
      state.info.uid = action.payload.user.uid;
      state.info.email = action.payload.additionalUserInfo.profile.email;
      state.error = null;

      return state;

    case "FACEBOOK_LOGIN_ERROR":
      state.pending = false;
      state.loggedIn = false;
      state.error = action.payload;

      return state;

    case "GOOGLE_LOGIN_INIT":
      state.pending = true;
      state.loggedIn = false;
      state.error = null;
      console.log(state);

      return state;

    case "GOOGLE_LOGIN":
      // googleLogin().then((results) => {
      //   console.log(results);
      // });
      // return state;
      state.pending = false;
      state.loggedIn = true;
      state.error = null;
      state.info.fullName = action.payload.additionalUserInfo.profile.name;

      console.log(action.payload);
      return state;

    case "GOOGLE_LOGIN_ERROR":
      state.pending = false;
      state.loggedIn = false;
      state.error = action.payload;
      console.error(action.payload);

      return state;

    case "GET_ORDERS":
      state.orders = action.payload;
      return state;
    case "GET_ORDERS_ERROR":
      state.error = action.payload;
      return state;
    case "PUT_ORDERS":
      state.error = null;
      return state;

    case "UPDATE_USER_INFO":
      state.info.fullName =
        action.payload.fullName || action.payload.fullName != ""
          ? action.payload.fullName
          : state.info.fullName;
      state.info.email =
        action.payload.email != "" || action.payload.email
          ? action.payload.email
          : state.info.email;
      state.info.shippingAddress =
        action.payload.shippingAddress ||
        action.payload.shippingAddress != {} ||
        state.info.shippingAddress == undefined
          ? action.payload.shippingAddress
          : {};
      return state;

    case "UPDATE_USER_INFO_ERROR":
      state.error = action.payload;
      return state;
    case "AFTER_REFRESH":
      let ExtractedData = JSON.parse(window.localStorage.getItem("userState"));
      state.info = ExtractedData.info;
      state.loggedIn = ExtractedData.loggedIn;
      state.pending = ExtractedData.pending;
      state.wishlist = ExtractedData.wishlist;
      state.orders = ExtractedData.orders ? ExtractedData.orders : [];

      state.error = {};

      return state;

    case "SIGN_OUT":
      state.user = {
        fullName: "stranger",
      };
      state.loggedIn = false;
      return state;
    case "ADD_TO_WISHLIST":
      if (
        state.wishlist.filter((product) => action.payload.id == product.id)
          .length > 0
      ) {
        console.log(action.payload);
        return state;
      }
      console.log(action.payload);
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };

    default:
      return state;
  }
}

export default userReducer;
