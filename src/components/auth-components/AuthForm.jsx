import React, { useState } from "react";
import styles from "../../styles/componentStyles/authform.module";
import { useUser } from "../../context";
import { signUpUser, loginUser } from "../../firebase/actions";

function AuthForm({ type }) {
  const [authType, setAuthType] = useState("register");
  const { userDispatch } = useUser();
  const [info, setInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const OnChangeValue = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <button
          className={
            authType == "register" ? styles.authTypeActive : styles.authType
          }
          onClick={() => setAuthType("register")}
        >
          Register
        </button>
        <button
          className={
            authType == "login" ? styles.authTypeActive : styles.authType
          }
          onClick={() => setAuthType("login")}
        >
          Login
        </button>
      </div>
      {authType == "register" ? (
        <div className={styles.form}>
          <div className={styles.formRow}>
            <label className="grey alt-font small" htmlFor="">
              Full Name
            </label>
            <input
              onChange={OnChangeValue}
              name="fullName"
              type="text"
              value={info.fullName}
            />
          </div>
          <div className={styles.formRow}>
            <label className="grey alt-font small" htmlFor="">
              Email
            </label>
            <input
              onChange={OnChangeValue}
              name="email"
              type="text"
              value={info.email}
            />
          </div>
          <div className={styles.formRow}>
            <label className="grey alt-font small" htmlFor="">
              Phone Number
            </label>
            <input
              onChange={OnChangeValue}
              name="phone"
              type="text"
              value={info.phone}
            />
          </div>
          <div className={styles.formRow}>
            <label className="grey alt-font small" htmlFor="">
              Password
            </label>
            <input
              onChange={OnChangeValue}
              name="password"
              type="password"
              value={info.password}
            />
          </div>
          <div className={styles.formRow}>
            <label className="grey alt-font small" htmlFor="">
              Confirm Password
            </label>
            <input
              onChange={OnChangeValue}
              name="confirmPassword"
              type="password"
              value={info.confirmPassword}
            />
          </div>
          <button
            onClick={() => {
              userDispatch({ type: "REGISTER_USER", payload: info });
            }}
          >
            Submit
          </button>
        </div>
      ) : (
        <div className={styles.form}>
          <div className={styles.formRow}>
            <label className="grey alt-font small" htmlFor="">
              Email
            </label>
            <input
              onChange={OnChangeValue}
              name="email"
              type="text"
              value={info.email}
            />
          </div>

          <div className={styles.formRow}>
            <label className="grey alt-font small" htmlFor="">
              Password
            </label>
            <input
              onChange={OnChangeValue}
              name="password"
              type="password"
              value={info.password}
            />
          </div>
          <button
            onClick={() => {
              userDispatch({ type: "LOGIN_USER", payload: info });
            }}
          >
            GO
          </button>
        </div>
      )}
    </div>
  );
}

export default AuthForm;
