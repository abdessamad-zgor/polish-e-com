import React from "react";
import styles from "../../styles/componentStyles/productinfo.module";
import { Hearticon, CartAddIcon } from "../icons";

function ProductInfo({ product, addToCart, addToWishlist }) {
  return (
    <div className={styles.root}>
      <div className={styles.info}>
        <div className={styles.title}>
          <h2 className="dfl-font bold">{product.title}</h2>
        </div>
        <p className="pa-4"></p>

        <div className={styles.details}>
          {Object.keys(product.details).map((key) => (
            <div className={styles.item}>
              <h5 className="bold">{key}:</h5>
              {Array.isArray(product.details[key]) ? (
                product.details[key].map((value) => (
                  <button className={styles.value}>{value}</button>
                ))
              ) : (
                <h5 className="grey ">{product.details[key]}</h5>
              )}
            </div>
          ))}
        </div>

        <p className="pa-5"></p>
        <p className="dfl-font bold grey">{product.price} MAD</p>
        <div className="flex">
          <span className="fab-small ma-5" onClick={addToCart}>
            <CartAddIcon />
          </span>
          <span className="fab-small ma-5" onClick={addToWishlist}>
            <Hearticon />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
