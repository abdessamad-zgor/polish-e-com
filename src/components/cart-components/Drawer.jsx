import React from "react";
import styles from "../../styles/componentStyles/drawer.module";
import { useAppbar, useCart } from "../../context";
import CartItem from "./CartItem";
import { Crossicon } from "../icons";
import { Link } from "react-router-dom";

function Drawer({ name, active, anchor }) {
  const { drawers, setDrawers } = useAppbar();
  const { cartState, cartDispatch } = useCart();
  let totalPrice = () => {
    let totalprice = 0;
    cartState.products.forEach(
      (product) => (totalprice = totalprice + product.price * product.quantity)
    );
    return totalprice;
  };

  const handleClose = () => {
    document.getElementById("drawer").style.animation =
      "slideDrawer 0.3s 1 ease-in reverse forwards";
    setTimeout(
      () => (document.getElementById("drawer").style.animation = ""),
      300
    );
    setTimeout(() => {
      setDrawers({ ...drawers, cart: !active });
    }, 350);
  };

  return (
    <div
      name={name}
      className={active ? styles.drawerContainerActive : styles.drawerContainer}
      onClick={handleClose}
    >
      <div
        id="drawer"
        style={{ float: `${anchor}` }}
        className={active ? styles.drawerActive : styles.drawer}
        name="cart"
      >
        <div className={styles.header}>
          <div className="fab-small" name="cart" onClick={handleClose}>
            <Crossicon />
          </div>
        </div>

        {drawers.cart && (
          <div className="container">
            {cartState.products.length > 0 ? (
              <div className="container">
                {cartState.products.map((product, key) => (
                  <CartItem key={key} product={product} />
                ))}
                <div
                  className="flex pa-3 ma-3"
                  style={{
                    border: "0.1em solid rgba(255, 140, 0, 0.40)",
                    borderRadius: "0.2em",
                    backgroundColor: "rgba(255, 255, 255, 0.40)",
                  }}
                >
                  <h2 className="display-font">Total:</h2>
                  <div className="grow"></div>
                  <h3 className="alt-font grey thin ">{totalPrice()} DH</h3>
                </div>

                <Link className={styles.btn} to="/checkout">
                  Checkout
                </Link>
              </div>
            ) : (
              <div className="pa-1">
                <p className="grey text-align pa-1">No Items Here</p>
                <div className="half ma">
                  <Link to="/products" className="alt-btn pa-3">
                    Go Shopping
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
