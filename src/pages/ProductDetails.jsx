import React from "react";
import Appbar from "../components/common/Appbar";
import styles from "../styles/pageStyles/productdetails.module";
import RelatedProducts from "../components/product-components/RelatedProducts";
import ProductDetailsBar from "../components/product-components/ProductDetailsBar";
import ProductDisplay from "../components/product-components/ProductDisplay";
import Collectionbar from "../components/product-components/Collectionbar";
import Path from "../components/common/Path";
import { productDetailsLogic } from "./logic/productDetails.lg";
import { ProductDisplaySkeleton } from "../components/logic/productDisplay.lg";

function ProductDetails() {
  const { activeNav, products, checkProductInView } = productDetailsLogic();

  return (
    <div className={styles.root}>
      {/* app bar section */}
      <Appbar />
      <Collectionbar />
      <Path />
      {/* product details bar shows only when product details are not in view and when product data in available */}
      {activeNav && !products.pending ? (
        <ProductDetailsBar product={products.inView} />
      ) : (
        ""
      )}
      {checkProductInView ? <ProductDisplaySkeleton /> : <ProductDisplay />}

      <RelatedProducts />
    </div>
  );
}

export default ProductDetails;
