import productReducer from "../reducers/productReducer";
import { useEffect, useContext, createContext, useReducer } from "react";
import { productsInit } from "../states";
import { getAllProductsGetter } from "../../lib/getters/productGetters";

export const productContextLogic = () => {
  const [products, productDispatch] = useReducer(productReducer, productsInit);

  useEffect(async () => {
    try {
      let productAll = await getAllProductsGetter();
      productDispatch({ type: "GET_ALL_PRODUCTS", payload: productAll });
    } catch (err) {
      productDispatch({ type: "GET_ALL_PRODUCTS_ERROR", payload: err });
    }
  }, []);
  return { products, productDispatch };
};

export const ProductContext = createContext();

export function useProducts() {
  const context = useContext(ProductContext);
  return context;
}
