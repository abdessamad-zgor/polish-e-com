import React from "react";
import {
  productContextLogic,
  ProductContext,
  useProducts,
} from "./logic/product.lg";

function ProductContextProvider({ children }) {
  const { products, productDispatch } = productContextLogic();
  return (
    <ProductContext.Provider value={{ products, productDispatch }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;

export { useProducts };
