import { useUser } from "../../context";

export const useLogic = () => {
  const { userState } = useUser();
  return { userState };
};
