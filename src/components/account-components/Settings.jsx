import React from "react";
import styles from "../../styles/componentStyles/settings.module";
import ShippingAddress from "./ShippingAddress";
import { useLogic } from "../logic/settings.lg";

function Settings() {
  const { userState } = useLogic();
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
          <ShippingAddress />
        </div>
      </div>
    </div>
  );
}

export default Settings;
