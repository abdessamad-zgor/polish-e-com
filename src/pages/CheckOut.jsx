import React from "react";
import styles from "../styles/pageStyles/checkout.module";
import Appbar from "../components/common/Appbar";
import Path from "../components/common/Path";
import ShippingAddress from "../components/account-components/ShippingAddress";
import OrderSummary from "../components/account-components/OrderSummary";
import { AppbarContextProvider } from "../context";
import { checkoutLogic } from "./logic/checkout.lg";

function CheckOut() {
  const { putOrderClick, address, OnChangeValue, getTotal, cartState } =
    checkoutLogic();
  return (
    <div className={styles.root}>
      <Appbar />

      <Path />
      <div className={styles.container}>
        <div className="align-center-flex pa-1">
          <div style={{ width: "60%" }}>
            <h2 className={styles.title}>Shipping Address</h2>
            <ShippingAddress
              onClick={putOrderClick}
              address={address}
              OnChangeValue={OnChangeValue}
            />
          </div>
          <div style={{ width: "39%" }}>
            <OrderSummary getTotal={getTotal} cartState={cartState} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
