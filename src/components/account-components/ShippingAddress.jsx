import React from "react";
import styles from "../../styles/componentStyles/shippingaddress.module";

function ShippingAddress({ onClick, address, OnChangeValue }) {
  return (
    <div className={styles.root}>
      <div className={styles.form}>
        <div className={styles.formRow}>
          <label className="grey alt-font small" htmlFor="">
            Full Name
          </label>
          <input
            onChange={OnChangeValue}
            className={styles.input}
            name="fullName"
            type="text"
            value={address.fullName}
          />
        </div>

        <div className={styles.formRow}>
          <div style={{ width: "30%", display: "inline-block" }}>
            {/* convert to select drop down */}
            <label className="grey alt-font small" htmlFor="">
              city
            </label>
            <input
              onChange={OnChangeValue}
              className={styles.input}
              name="city"
              type="text"
              value={address.city}
            />
          </div>
          <div style={{ width: "69%", display: "inline-block" }}>
            <label className="grey alt-font small" htmlFor="">
              Street Address
            </label>
            <input
              onChange={OnChangeValue}
              className={styles.input}
              name="streetAddress"
              type="text"
              value={address.streetAddress}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <label className="grey alt-font small" htmlFor="">
            Confirmation phone
          </label>
          <input
            onChange={OnChangeValue}
            className={styles.input}
            name="confirmPhone"
            type="text"
            value={address.confirmPhone}
          />
        </div>
        <div className={styles.footer}>
          <div className="grow"></div>
          <button onClick={onClick}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default ShippingAddress;
