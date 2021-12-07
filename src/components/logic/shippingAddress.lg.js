import { useCart, useUser } from "../../context";
import { useState } from "react";
import { putOrderGetter } from "../../lib/getters/userGetters";

export const shippingAddressLG = () => {
  const { userState, userDispatch } = useUser();
  const { cartState } = useCart();

  //put Up order
  const putOrderClick = async () => {
    try {
      await putOrderGetter(userState.info.uid, {
        forClient: {
          fullName: userState.info.fullName,
          email: userState.info.email,
        },
        products: cartState,
        toAddress: address,
      });
      userDispatch({
        type: "PUT_ORDER",
        payload: {
          cart: cartState,
          address: address,
          user: userState.info,
        },
      });
    } catch (err) {
      console.error(err);
    }
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

  //save address
  const saveAddress = () => {
    userDispatch({ type: "SAVE_ADDRESS", payload: address });
  };

  //get cities array

  //add validator rules

  return {
    address,
    OnChangeValue,
    putOrderClick,
    saveAddress,
  };
};
