import React from "react";

import { facebookLoginLogic } from "../logic/facebookLogin.lg";

import styles from "../../styles/componentStyles/facebooklogin.module";

function FacebookLogin() {
  const { handleLoginProcess } = facebookLoginLogic();
  return (
    <button className={styles.root} onClick={handleLoginProcess}>
      <span>Login With Facebook</span>
    </button>
  );
}

export default FacebookLogin;
