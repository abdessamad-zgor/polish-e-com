import React from "react";
import styles from "../styles/pageStyles/viewcart.module";
import Appbar from "../components/common/Appbar";
import CartItem from "../components/cart-components/CartItem";
import Path from "../components/common/Path";
import { AppbarContextProvider, useCart } from "../context";

function ViewCart() {
  const { cartState, cartDispath } = useCart();
  return (
    <div className={styles.root}>
      <Appbar />

      <div className={styles.cartItems}>
        {cartState.products.map((item) => (
          <CartItem product={item} />
        ))}
      </div>
    </div>
  );
}

export default ViewCart;
