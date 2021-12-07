import React from "react";
import styles from "../../styles/componentStyles/ordersummary.module";
import CartItem from "../cart-components/CartItem";

function OrderSummary({ getTotal, cartState }) {
  return (
    <div className={styles.root}>
      {cartState.products.length > 0 ? (
        <>
          <div className={styles.container}>
            {cartState.products.map((product, key) => (
              <CartItem product={product} key={key} />
            ))}
            <div className={styles.footer}>
              <h2 className="display-font">Total:</h2>
              <div className="grow"></div>
              <h3 className="alt-font grey thin ">{getTotal()} MAD</h3>
            </div>
          </div>
        </>
      ) : (
        <div className={styles.container}>
          <h2 className="dfl-font grey pa-2">There's Nothing here</h2>
        </div>
      )}
    </div>
  );
}

export default OrderSummary;
