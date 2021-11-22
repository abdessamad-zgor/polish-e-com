import { useState } from "react";
import { useCart, useUser } from "../../context";
import { putOrderGetter } from "../../lib/getters/userGetters";

export const checkoutLogic = function () {
  const { userState, userDispatch } = useUser();
  const { cartState } = useCart();
  const putOrderClick = async () => {
    try {
      userDispatch({
        type: "UPDATE_USER_INFO",
        payload: {
          fullName: address.fullName,
          shippingAddress: address,
          email: userState.info.email,
        },
      });

      await putOrderGetter(userState.info.uid, {
        cart: cartState,
        address: address,
        user: userState.info,
      });
    } catch (err) {
      userDispatch({ type: "UPDATE_USER_INFO_ERROR", payload: err });
    }
  };

  const [address, setAddress] = useState({
    fullName: userState.info.fullName || "",
    city:
      userState.info.shippingAddress !== undefined
        ? userState.info.shippingAddress.city
        : "",
    streetAddress:
      userState.info.shippingAddress !== undefined
        ? userState.info.shippingAddress.streetAddress
        : "",
    confirmPhone:
      userState.info.shippingAddress !== undefined
        ? userState.info.shippingAddress.confirmPhone
        : "",
  });
  const OnChangeValue = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };
  const getTotal = () => {
    let total = 0;
    cartState.products.forEach((product) => {
      total += product.price * product.quantity;
    });
    return total;
  };

  return {
    userState,
    userDispatch,
    address,
    OnChangeValue,
    cartState,
    getTotal,
    putOrderClick,
  };
};
