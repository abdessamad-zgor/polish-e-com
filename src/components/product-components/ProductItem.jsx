import React from "react";
import styles from "../../styles/componentStyles/productitem.module";

function ProductItem({ product }) {
  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <img src={product.images[0]} alt="" />
      </div>
      <div className={styles.title}>
        <h2 className="dflt-font">{product.title}</h2>
      </div>
    </div>
  );
}

export default ProductItem;
