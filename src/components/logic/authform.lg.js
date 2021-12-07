import {
  loginUserGetter,
  signUpUserGetter,
} from "../../lib/getters/userGetters";
import { useState } from "react";
import { useUser } from "../../context";

export const useLogic = () => {
  const { userDispatch } = useUser();
  const [info, setInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [authType, setAuthType] = useState("register");
  const OnChangeValue = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const registerClick = async () => {
    try {
      let user = await signUpUserGetter(info);
      userDispatch({ type: "SIGNUP_USER", payload: user });
    } catch (err) {
      userDispatch({ type: "SIGNUP_USER_ERROR", payload: err });
    }
  };

  const loginClick = async () => {
    try {
      let user = await loginUserGetter(info);
      userDispatch({ type: "LOGIN_USER", payload: user });
    } catch (err) {
      userDispatch({ type: "LOGIN_USER_ERROR", payload: err });
    }
  };

  const changeAuthType = (e) => {
    setAuthType(e.target.getAttribute("name"));
  };

  return {
    registerClick,
    loginClick,
    info,
    OnChangeValue,
    changeAuthType,
    authType,
  };
};
