import { cartInit } from "../states";

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        loggedIn: true,
        info: {
          fullName: action.payload.fullName,
          email: action.payload.email,
          phone: action.payload.phoneNumber,
          uid: action.payload.uid,
          address: action.payload.address,
        },
      };
    case "LOGIN_USER_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    case "SIGNUP_USER":
      return {
        ...state,
        loggedIn: true,
        info: {
          fullName: action.payload.user.fullName,
          email: action.payload.user.email,
          phone: action.payload.user.phoneNumber,
          uid: action.payload.user.uid,
        },
      };
    case "SIGNUP_USER_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "FACEBOOK_LOGIN_INIT":
      state.pending = true;
      state.error = null;
      state.loggedIn = false;
      return state;

    case "FACEBOOK_LOGIN":
      return {
        ...state,
        pending: false,
        loggedIn: true,
        info: {
          fullName: action.payload.additionalUserInfo.profile.name,
          uid: action.payload.user.uid,
          email: action.payload.additionalUserInfo.profile.email,
          avatar: action.payload.additionalUserInfo.profile.picture.data.url,
        },
      };

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
      return {
        ...state,
        loggedIn: true,
        pending: false,
        error: null,
        info: {
          fullName: action.payload.additionalUserInfo.profile.name,
        },
      };

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
    case "PUT_ORDER":
      return {
        ...state,
        orders: [
          ...state.orders,
          {
            forClient: {
              fullName: action.payload.user.fullName,
              email: action.payload.user.email,
            },
            products: action.payload.cart,
            toAddress: action.payload.address,
          },
        ],
      };

    case "UPDATE_USER_INFO":
      state.info.fullName =
        action.payload.fullName || action.payload.fullName != ""
          ? action.payload.fullName
          : state.info.fullName;
      state.info.email =
        action.payload.email != "" || action.payload.email
          ? action.payload.email
          : state.info.email;
      state.info.address =
        action.payload.address ||
        action.payload.address != {} ||
        state.info.address != undefined
          ? action.payload.address
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
      return {
        ...state,
        loggedIn: false,
        orders: [],
        wishlist: [],
        info: {
          fullName: "strange",
        },
      };
    case "ADD_TO_WISHLIST":
      if (
        state.wishlist.filter((product) => action.payload.id == product.id)
          .length > 0
      ) {
        return state;
      }
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    case "SAVE_ADDRESS":
      return {
        ...state,
        info: {
          ...state.info,
          address: action.payload,
        },
      };
    default:
      return state;
  }
}

export default userReducer;
