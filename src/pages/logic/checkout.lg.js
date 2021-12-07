import { useCart } from "../../context";

export const checkoutLogic = function () {
  const { cartState } = useCart();

  const getTotal = () => {
    let total = 0;
    cartState.products.forEach((product) => {
      total += product.price * product.quantity;
    });
    return total;
  };

  return {
    cartState,
    getTotal,
  };
};
