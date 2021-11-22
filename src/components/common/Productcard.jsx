import React from "react";
import styles from "../../styles/componentStyles/productcard.module";
import { CartAddIcon } from "../icons";
import { useCart, useProducts } from "../../context";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

function Productcard({ product }) {
  const { cartDispatch } = useCart();

  const { products, productDispatch } = useProducts();
  const history = useHistory();
  return (
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        <img
          onClick={() => {
            productDispatch({ type: "SET_PRODUCT_INVIEW_INIT" });
            history.push(`/product/${product.slug}`);
            productDispatch({ type: "SET_PRODUCT_INVIEW", payload: product });
          }}
          src={product.images[0]}
        />
      </div>
      <div className={styles.productActions}>
        <h3 className="lgh-font display-font "> {product.title}</h3>
        <p
          style={{ color: "grey", float: "left" }}
          className="thin small dfl-font pa-3"
        >
          {product.price}DH
        </p>
        <div className="flex container ">
          <div
            className="fab-tiny"
            style={{ float: "left" }}
            onClick={() => {
              cartDispatch({ type: "ADD_TO_CART", payload: product });
            }}
          >
            <CartAddIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productcard;
