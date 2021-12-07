import { useProducts } from "../../context";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const useLogic = () => {
  const { name } = useParams();
  const { productDispatch } = useProducts();
  useEffect(() => {
    productDispatch({ type: "FILTER_PRODUCTS", payload: name });
  }, [name]);
  return { name };
};
