import { useCart } from "../../context";
import { useState } from "react";
export const OrderSummaryLG = () => {
  const { cartState } = useCart();
  const getTotal = () => {
    let total = 0;
    cartState.products.forEach((product) => {
      total += product.price;
    });
    return total;
  };

  return { cartState, getTotal };
};
