import React from "react";
import styles from "../../styles/componentStyles/accountabs.module";
import { useHistory } from "react-router-dom";

function AccountTabs() {
  const history = useHistory();
  const handleClick = (e) => {
    history.push(`/account/${e.target.getAttribute("name")}`);
  };
  return (
    <div className={styles.root}>
      <ul className={styles.navList}>
        <li className={styles.navItem} name="settings" onClick={handleClick}>
          Overview
        </li>
        <li className={styles.navItem} name="orders" onClick={handleClick}>
          My Order
        </li>
        <li className={styles.navItem} name="wishlist" onClick={handleClick}>
          Wishlist
        </li>
        <li className={styles.navItem} name="coupons" onClick={handleClick}>
          My Coupons
        </li>
      </ul>
    </div>
  );
}

export default AccountTabs;
