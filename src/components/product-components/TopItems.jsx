import React from "react";
import { useProducts } from "../../context";
import Productcard from "../common/Productcard";

function TopItems() {
  const { products } = useProducts();

  return !products.pending ? (
    <div className="align-center-flex wrap pa-1">
      {products.all.map((product, key) => (
        <Productcard key={key} product={product} />
      ))}
    </div>
  ) : (
    <div className="align-center-flex wrap pa-1">
      <SkeletonProductCard />
      <SkeletonProductCard />
    </div>
  );
}

export default TopItems;

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
