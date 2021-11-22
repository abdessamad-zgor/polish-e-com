import React from "react";
import styles from "../../styles/componentStyles/googlelogin.module";
import { googleLoginLogic } from "../logic/googleLogin.lg";

function GoogleLogin() {
  const { handleLoginProcessGoogle } = googleLoginLogic();
  return (
    <button className={styles.root} onClick={handleLoginProcessGoogle}>
      <span>Login with Google</span>
    </button>
  );
}

export default GoogleLogin;
