import React, { useState, useEffect } from "react";
import styles from "../../styles/componentStyles/dropdown.module";
import { useUser, UserContextProvider, useAppbar } from "../../context";
import { Usericon } from "../icons";
import { useHistory } from "react-router-dom";
import Modal from "./Modal";

function DropDown() {
  const { userState, userDispatch } = useUser();
  const [type, setType] = useState("");
  const { drawers, setDrawers } = useAppbar();
  const [active, setActive] = useState(false);
  const history = useHistory();
  const PromptToAuth = (e) => {
    if (userState.loggedIn) {
      history.push(`/account/${e.target.getAttribute("name")}`);
      setActive(false);
    } else {
      setType("register");
      setDrawers({ ...drawers, auth: true });
    }
  };

  return (
    <>
      <div className="flex">
        <span
          className="fab-small pa-5"
          onClick={() => {
            setActive(!active);
          }}
          name="user"
        >
          {/* login //sighnup if login // dropdown */}

          <Usericon />
        </span>
        {active ? (
          <div className={styles.drawerUser}>
            <div className={styles.header}>
              {" "}
              <div className={styles.userIcon}>
                <Usericon />
              </div>
              <div className={styles.userName}>
                <p className="alt-font bold">
                  Hello! {userState.info.fullName}.
                </p>
              </div>
            </div>
            {userState.loggedIn ? (
              ""
            ) : (
              <p className="small grey alt-font">
                <a
                  name="register"
                  href=""
                  target="_blank"
                  onClick={PromptToAuth}
                >
                  Register
                </a>{" "}
                or{" "}
                <a href="" name="signin" target="_blank" onClick={PromptToAuth}>
                  Sign In
                </a>
              </p>
            )}

            <ul className={styles.list}>
              <li
                className={styles.entry}
                name="settings"
                onClick={PromptToAuth}
              >
                Parameters
              </li>
              <li className={styles.entry} name="orders" onClick={PromptToAuth}>
                My Orders
              </li>
              <li
                className={styles.entry}
                name="wishlist"
                onClick={PromptToAuth}
              >
                Wishlist
              </li>
              <li
                className={styles.entry}
                name="coupons"
                onClick={PromptToAuth}
              >
                My Cuppons
              </li>
              <li
                className={styles.entry}
                name="special-offers"
                onClick={PromptToAuth}
              >
                Special Offers
              </li>
              {userState.loggedIn ? (
                <li
                  className={styles.entry}
                  name="signout"
                  onClick={() => {
                    userDispatch({ type: "SIGN_OUT" });
                  }}
                >
                  Sign out
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        ) : (
          ""
        )}

        <Modal />
      </div>
    </>
  );
}

export default DropDown;
