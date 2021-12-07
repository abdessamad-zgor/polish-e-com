import React from "react";
import styles from "../../styles/componentStyles/productslisting.module";
import Productcard from "../common/Productcard";
import { useLogic } from "../logic/productslisting.lg";

function ProductsListing() {
  const { productsListing, pending } = useLogic();

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {!pending ? (
          productsListing.map((product) => (
            <Productcard product={product} noAction />
          ))
        ) : (
          <>
            <SkeletonProductCard />
            <SkeletonProductCard />
            <SkeletonProductCard />
          </>
        )}
      </div>
    </div>
  );
}

export default ProductsListing;

const SkeletonProductCard = () => {
  return (
    <div
      style={{
        width: "17vw",
        margin: "1em",
        border: "0.1em solid rgba(128, 128, 128, 0.075)",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(128, 128, 128, 0.5)",
          paddingBottom: "8em",
        }}
      ></div>

      <div>
        <div className="loading pa-4 ma-3"></div>
        <div className="loading pa-5 ma-2"></div>
      </div>
    </div>
  );
};
