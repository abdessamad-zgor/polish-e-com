import React from "react";
import styles from "../styles/pageStyles/products.module";

//import components
import Filterbar from "../components/product-components/Filterbar";
import ProductsListing from "../components/product-components/ProductsListing";
import Appbar from "../components/common/Appbar";
import { useLogic } from "./logic/products.lg";

function Products() {
  // const { products } = useLogic();
  return (
    <div className={styles.root}>
      <Appbar />
      <Filterbar />
      <div className={styles.container}>
        <ProductsListing />
      </div>
    </div>
  );
}

export default Products;
