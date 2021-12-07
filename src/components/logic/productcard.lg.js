import { useCart, useProducts } from "../../context";
import { useHistory } from "react-router-dom";
import { logSelectEvent } from "../../firebase/analytics/events";

export const useLogic = (product) => {
  const { cartDispatch } = useCart();
  const { productDispatch } = useProducts();
  const history = useHistory();

  const setProductInView = () => {
    productDispatch({ type: "SET_PRODUCT_INVIEW_INIT" });
    history.push(`/products/${product.slug}`);
    logSelectEvent(product);
    productDispatch({
      type: "SET_PRODUCT_INVIEW",
      payload: product,
    });
  };

  const addToCart = () => {
    cartDispatch({ type: "ADD_TO_CART", payload: product });
  };

  return { setProductInView, addToCart };
};
