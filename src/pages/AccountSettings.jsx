import React from "react";
import { Route } from "react-router-dom";
import { AppbarContextProvider } from "../context";
import styles from "../styles/pageStyles/accountsettings.module";

import Appbar from "../components/common/Appbar";
import Path from "../components/common/Path";

import AccountTabs from "../components/account-components/AccountTabs";
import Settings from "../components/account-components/Settings";
import Orders from "../components/account-components/Orders";
import Wishlist from "../components/account-components/Wishlist";

function AccountSettings() {
  return (
    <div className={styles.root}>
      <Appbar />
      <Path />
      <AccountTabs />
      <div className="container">
        <Route exact path="/account/settings" component={Settings} />
        <Route exact path="/account/orders" component={Orders} />
        <Route exact path="/account/wishlist" component={Wishlist} />
        <Route exact path="/account/coupons" />
      </div>
    </div>
  );
}

export default AccountSettings;
