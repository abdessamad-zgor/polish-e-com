import React from "react";
import styles from "../../styles/componentStyles/wishlist.module";
import ProductItem from "../product-components/ProductItem";
import { wishlistLogic } from "../logic/wishlist.lg";

function Wishlist() {
  const { wishlist } = wishlistLogic();
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {wishlist.length > 0 ? (
          wishlist.map((product) => <ProductItem product={product} />)
        ) : (
          <div className={styles.nothing}>
            <h2 className="grey">Nothing here, get shopping</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
