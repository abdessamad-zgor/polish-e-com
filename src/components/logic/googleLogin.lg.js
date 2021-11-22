import { useUser } from "../../context";
import { googleLoginGetter } from "../../lib/getters/userGetters";

export const googleLoginLogic = () => {
  const { userDispatch } = useUser();

  const handleLoginProcessGoogle = async () => {
    try {
      userDispatch({ type: "GOOGLE_LOGIN_INIT" });
      let user = await googleLoginGetter();
      userDispatch({ type: "GOOGLE_LOGIN", payload: user });
    } catch (err) {
      userDispatch({ type: "GOOGLE_LOGIN_ERROR", payload: err });
    }
  };
  return { handleLoginProcessGoogle };
};
