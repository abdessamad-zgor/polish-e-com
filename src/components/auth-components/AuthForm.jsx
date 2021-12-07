import React from "react";
import styles from "../../styles/componentStyles/authform.module";
import { useLogic } from "../logic/authform.lg";

function AuthForm() {
  const {
    registerClick,
    loginClick,
    info,
    OnChangeValue,
    authType,
    changeAuthType,
  } = useLogic();
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <button
          name="register"
          className={
            authType == "register" ? styles.authTypeActive : styles.authType
          }
          onClick={changeAuthType}
        >
          Register
        </button>
        <button
          name="login"
          className={
            authType == "login" ? styles.authTypeActive : styles.authType
          }
          onClick={changeAuthType}
        >
          Login
        </button>
      </div>
      {authType == "register" ? (
        <div className={styles.form}>
          <div className={styles.formRow}>
            <label className={styles.label} htmlFor="">
              Full Name
            </label>
            <input
              className={styles.input}
              onChange={OnChangeValue}
              name="fullName"
              type="text"
              value={info.fullName}
            />
          </div>
          <div className={styles.formRow}>
            <label className={styles.label} htmlFor="">
              Email
            </label>
            <input
              className={styles.input}
              onChange={OnChangeValue}
              name="email"
              type="text"
              value={info.email}
            />
          </div>
          <div className={styles.formRow}>
            <label className={styles.label} htmlFor="">
              Phone Number
            </label>
            <input
              className={styles.input}
              onChange={OnChangeValue}
              name="phone"
              type="text"
              value={info.phone}
            />
          </div>
          <div className={styles.formRow}>
            <label className={styles.label} htmlFor="">
              Password
            </label>
            <input
              className={styles.input}
              onChange={OnChangeValue}
              name="password"
              type="password"
              value={info.password}
            />
          </div>
          <div className={styles.formRow}>
            <label className={styles.label} htmlFor="">
              Confirm Password
            </label>
            <input
              className={styles.input}
              onChange={OnChangeValue}
              name="confirmPassword"
              type="password"
              value={info.confirmPassword}
            />
          </div>
          <button className={styles.btn} onClick={registerClick}>
            Submit
          </button>
        </div>
      ) : (
        <div className={styles.form}>
          <div className={styles.formRow}>
            <label className={styles.label} htmlFor="">
              Email
            </label>
            <input
              className={styles.input}
              onChange={OnChangeValue}
              name="email"
              type="text"
              value={info.email}
            />
          </div>

          <div className={styles.formRow}>
            <label className={styles.label} htmlFor="">
              Password
            </label>
            <input
              className={styles.input}
              onChange={OnChangeValue}
              name="password"
              type="password"
              value={info.password}
            />
          </div>
          <button className={styles.btn} onClick={loginClick}>
            GO
          </button>
        </div>
      )}
    </div>
  );
}

export default AuthForm;
