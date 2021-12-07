import React from "react";
import styles from "../styles/pageStyles/collectionpage.module";

//import components
import Appbar from "../components/common/Appbar";
import CollectionDrawer from "../components/product-components/CollectionDrawer";
import ProductsListing from "../components/product-components/ProductsListing";
import Path from "../components/common/Path";
import Filterbar from "../components/product-components/Filterbar";

//import logic
import { useLogic } from "./logic/collectionpage.lg";

function CollectionPage() {
  const { name } = useLogic();
  return (
    <div className={styles.root}>
      <Appbar />
      <Path />

      <div className={styles.container}>
        <div className={styles.drawer}>
          <CollectionDrawer name={name} />
        </div>
        <div className={styles.listing}>
          <Filterbar />
          <ProductsListing collection />
        </div>
      </div>
    </div>
  );
}

export default CollectionPage;
