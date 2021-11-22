import React from "react";
import styles from "../../styles/componentStyles/productdisplay.module";
import { productDisplayLogic } from "../logic/productDisplay.lg";
import ProductInfo from "./ProductInfo";
import ProductImage from "./ProductImage";
import ReviewSection from "./ReviewSection";

function ProductDisplay() {
  const {
    addToCart,
    addToWishlist,
    imageInView,
    changeImageinview,
    id,
    product,
    imageStyles,
  } = productDisplayLogic();
  return (
    <div className={styles.root}>
      <div className={styles.card}>
        <div className="stretch">
          <div className="half">
            <ProductImage
              product={product}
              changeImageinview={changeImageinview}
              imageInView={imageInView}
              imageStyle={imageStyles}
            />
          </div>
          <div className="half">
            <ProductInfo
              addToCart={addToCart}
              addToWishlist={addToWishlist}
              product={product}
            />
          </div>
        </div>
        <h3 className="dfl-font pa-3">Reviews</h3>

        <ReviewSection id={id} />
      </div>
    </div>
  );
}

export default ProductDisplay;
