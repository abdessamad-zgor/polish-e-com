import React from "react";
import styles from "../../styles/componentStyles/cartitem.module";
import { useCart } from "../../context";

function CartItem({ product }) {
  const { cartDispatch } = useCart();

  return (
    <div className={styles.cartItem}>
      <img
        name="image"
        src={product.images[0]}
        alt=""
        className={styles.productImg}
      />
      <div className={styles.productInfo}>
        <h4 className="display-font  lgh-font">{product.title}</h4>
        <p className="alt-font thin grey">{product.price} DH</p>
      </div>
      <div className={styles.quantityDiv}>
        <div
          className="fab-tiny text-align bold"
          style={{ boxShadow: "0.1em 0.1em 0.3em 0.1em rgba(0,0,0,0.12)" }}
          onClick={() => {
            cartDispatch({ type: "ADD_QUANTITY", payload: product });
          }}
        >
          +
        </div>
        <div className="pa-5">{product.quantity}</div>
        <div
          className="fab-tiny text-align bold"
          style={{ boxShadow: "0.1em 0.1em 0.3em 0.1em rgba(0,0,0,00.12)" }}
          onClick={() => {
            cartDispatch({ type: "REDUCE_QUANTITY", payload: product });
          }}
        >
          -
        </div>
      </div>
    </div>
  );
}

export default CartItem;
