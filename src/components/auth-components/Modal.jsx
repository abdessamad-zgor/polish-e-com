import React from "react";
import styles from "../../styles/componentStyles/modal.module";
import { useAppbar } from "../../context";
import AuthForm from "./AuthForm";
import { Crossicon } from "../icons";
import FacebookLogin from "./FacebookLogin";
import GoogleLogin from "./GoogleLogin";

function Modal() {
  const { drawers, setDrawers } = useAppbar();

  return (
    <div>
      {drawers.auth ? (
        <div className={styles.root}>
          <div className={styles.modal}>
            <div className={styles.header}>
              <div
                className="fab-small "
                onClick={() => {
                  setDrawers({ ...drawers, auth: false });
                }}
              >
                <Crossicon />
              </div>
            </div>
            <div className="container flex-column">
              <div className="container">
                <AuthForm />
              </div>
              <div className="container">
                <div className="align-flex-column">
                  <p className="grey alt-font small thin">or:</p>
                  <FacebookLogin />
                  <GoogleLogin />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Modal;
