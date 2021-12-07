import { useEffect } from "react";
import { useProducts } from "../../context";

export const useLogic = () => {
  const { products, productDispatch } = useProducts();

  let productsListing =
    products.results.length > 0 ? products.results : products.all;

  let pending = products.pending;

  useEffect(() => {
    productDispatch({ type: "APPLY_FILTERS" });
  }, [products.filter]);

  return { productsListing, pending };
};
