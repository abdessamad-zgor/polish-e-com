import React from "react";
import styles from "../../styles/componentStyles/productdetailsbar.module";
import { Hearticon, CartAddIcon } from "../icons";
import { useCart } from "../../context";
function ProductDetailsBar({ product }) {
  const { cartDispatch } = useCart();
  return (
    <div className={styles.productDetailsbarActive}>
      <div className={styles.productImg}>
        <img src={product.images[0]} alt="" />
      </div>
      <div className={styles.productInfo}>
        <h1 className="display-font ">{product.title}</h1>
        <p className="grey alt-font">{product.price} MAD</p>
      </div>
      <div className={styles.productActions}>
        <button className="alt-btn bold  ma-5">Buy Now</button>
        <button
          className="alt-btn bold align-center-flex ma-5"
          onClick={() => {
            cartDispatch({ type: "ADD_TO_CART", payload: product });
          }}
        >
          Add To Cart{" "}
          <div className="fab-small">
            <CartAddIcon />
          </div>
        </button>
        <div className="fab-small ma-5">
          {" "}
          <Hearticon />
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsBar;
