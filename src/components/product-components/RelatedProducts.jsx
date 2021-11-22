import React from "react";
import { useProducts } from "../../context";
import Productcard from "../common/Productcard";

function RelatedProducts() {
  const { products } = useProducts();

  return !products.pending ? (
    <div className=" container">
      <h2
        className="dfl-font pa-5 ma-5"
        style={{ textAlign: "left", color: "rgba(255, 140, 0, 0.7)" }}
      >
        Related Products
      </h2>
      <hr
        style={{
          width: "70%",
          color: "rgba(255, 140, 0, 0.5)",
          border: "0.1em solid rgba(255, 140, 0, 0.5)",
          margin: "0.5em",
        }}
      />

      <div className="align-center-flex wrap text-align">
        {products.all.map((product, key) => (
          <Productcard key={key} product={product} />
        ))}
      </div>
    </div>
  ) : (
    <>
      <h2
        className="dfl-font pa-5 ma-3"
        style={{ textAlign: "left", color: "rgba(255, 140, 0, 0.7)" }}
      >
        Related Products
      </h2>
      <hr
        style={{
          width: "70%",
          color: "rgba(255, 140, 0, 0.5)",
          border: "0.1em solid rgba(255, 140, 0, 0.5)",
          margin: "1em",
        }}
      />
      <div className="align-center-flex wrap pa-1">
        <SkeletonProductCard />
        <SkeletonProductCard />
      </div>
    </>
  );
}

export default RelatedProducts;

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
