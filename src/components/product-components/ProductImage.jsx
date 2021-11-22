import React from "react";
import styles from "../../styles/componentStyles/productImage.module";
import Slider from "../common/Slider";

function ProductImage({ product, changeImageinview, imageInView, imageStyle }) {
  return (
    <div className={styles.root}>
      <div className={styles.imageSlide}>
        <Slider
          images={product.images}
          setImageInView={changeImageinview}
          imageInView={imageInView}
        />
      </div>

      <div id="product-cont" className={styles.container}>
        <div className={styles.productImg} style={imageStyle} />
      </div>
    </div>
  );
}

export default ProductImage;
