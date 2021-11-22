import { useCart, useUser } from "../../context";
import { useState } from "react";

export const shippingAddressLG = () => {
  const { userState, userDispatch } = useUser();
  const { cartState } = useCart();
  const putOrderClick = () => {
    userDispatch({
      type: "PUT_ORDER",
      payload: {
        cart: cartState,
        address: address,
        user: userState.info,
      },
    });
  };
  //set defaults
  const [address, setAddress] = useState({
    fullName: userState.info.fullName || "",
    city:
      userState.info.address !== undefined ? userState.info.address.city : "",
    streetAddress:
      userState.info.address !== undefined
        ? userState.info.address.streetAddress
        : "",
    confirmPhone:
      userState.info.address !== undefined
        ? userState.info.address.confirmPhone
        : "",
  });
  const OnChangeValue = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  //get cities array

  //add validator rules

  return {
    userState,
    userDispatch,
    address,
    OnChangeValue,
    cartState,
    putOrderClick,
  };
};
