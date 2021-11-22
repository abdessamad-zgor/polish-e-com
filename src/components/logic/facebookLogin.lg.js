import { useUser } from "../../context";
import {
  facebookLoginGetter,
  checkUserGetter,
} from "../../lib/getters/userGetters";

export const facebookLoginLogic = () => {
  const { userDispatch } = useUser();

  const handleLoginProcess = async () => {
    try {
      userDispatch({ type: "FACEBOOK_LOGIN_INIT" });
      let user = await facebookLoginGetter();
      let checkUser = await checkUserGetter({
        id: user.user.uid,
        email: user.additionalUserInfo.profile.email,
        name: user.additionalUserInfo.profile.name,
      });
      userDispatch({ type: "FACEBOOK_LOGIN", payload: user });
    } catch (err) {
      userDispatch({ type: "FACEBOOK_LOGIN_ERROR", payload: err });
    }
  };
  return { handleLoginProcess };
};
