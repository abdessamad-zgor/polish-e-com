import { useUser } from "../../context";
import { useEffect } from "react";
import { getOrdersGetter } from "../../lib/getters/userGetters";

export const ordersLogic = () => {
  const { userState, userDispatch } = useUser();

  useEffect(async () => {
    try {
      let orders = await getOrdersGetter(userState.info.uid);
      userDispatch({ type: "GET_ORDERS", payload: orders });
    } catch (err) {
      userDispatch({ type: "GET_ORDERS_ERROR", payload: err });
    }
  }, []);
  return { userState };
};
