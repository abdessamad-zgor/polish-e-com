import React from "react";
import styles from "../../styles/componentStyles/settings.module";
import ShippingAddress from "./ShippingAddress";
import { shippingAddressLG } from "../logic/shippingAddress.lg";

function Settings() {
  const { cartState, userState, userDispatch, address, OnChangeValue } =
    shippingAddressLG();
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.avatar}>
          <img
            className={styles.avatarImg}
            src={userState.info.avatar || ""}
            alt=""
          />
        </div>
        <div className={styles.address}>
          <h2 className={styles.title}>Shipping Address</h2>
          <ShippingAddress
            cartState={cartState}
            userState={userState}
            address={address}
            userDispatch={userDispatch}
            OnChangeValue={OnChangeValue}
          />
        </div>
      </div>
    </div>
  );
}

export default Settings;
