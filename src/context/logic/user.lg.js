import { createContext, useContext, useReducer, useEffect } from "react";
import { userInit } from "../states";
import {
  updateUserInfoGetter,
  updateWishlistGetter,
} from "../../lib/getters/userGetters";
import userReducer from "../reducers/userReducer";
const UserContext = createContext();

function useUser() {
  const context = useContext(UserContext);
  return context;
}

const userContextLG = function () {
  const [userState, userDispatch] = useReducer(userReducer, userInit);
  useEffect(() => {
    userDispatch({ type: "AFTER_REFRESH" });
  }, []);

  useEffect(async () => {
    await updateUserInfoGetter(
      userState.loggedIn,
      userState.info.uid,
      userState.info
    );
  }, [userState.info, userState.info.address]);

  useEffect(async () => {
    await updateWishlistGetter(
      userState.loggedIn,
      userState.info.uid,
      userState.wishlist
    );
  }, [userState.wishlist.length]);

  useEffect(() => {
    window.localStorage.setItem("userState", JSON.stringify(userState));
  }, [
    userState.loggedIn,
    userState.info,
    userState.wishlist,
    userState.orders,
  ]);
  return { userState, userDispatch };
};

export { userContextLG, UserContext, useUser };
