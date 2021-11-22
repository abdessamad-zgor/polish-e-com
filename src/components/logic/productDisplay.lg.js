import { useCart, useProducts, useUser } from "../../context";
import React, { useState, useEffect } from "react";
import styles from "../../styles/componentStyles/productdisplay.module";

export const productDisplayLogic = function () {
  const { cartDispatch } = useCart();
  const { userDispatch } = useUser();
  const { products } = useProducts();
  const [imageInView, setImageInView] = useState("");
  const product = products.inView;
  const id = products.inView.id;
  const changeImageinview = (e) => {
    const elemntSrc = e.target.getAttribute("src");
    setImageInView(elemntSrc);
  };
  useEffect(() => {
    setImageInView(product.images[0]);
  }, []);

  const imageStyles = {
    border: "0.1em solid rgba(168, 167, 166, 0.59)",
    padding: "0.1em",
    backgroundColor: "white",
    backgroundImage: `url(${imageInView})`,
    backgroundSize: "60%",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
  };

  const addToCart = () => {
    cartDispatch({ type: "ADD_TO_CART", payload: product });
  };

  const addToWishlist = () => {
    userDispatch({ type: "ADD_TO_WISHLIST", payload: product });
  };

  return {
    addToCart,
    imageInView,
    setImageInView,
    changeImageinview,
    id,
    product,
    imageStyles,
    addToWishlist,
  };
};

export const ProductDisplaySkeleton = ({ id }) => {
  return (
    <div id={id} className={`${styles.root} align-center-flex`}>
      <div className="half">
        <div
          style={{ background: "rgba(128, 128, 128, 0.5)", padding: "7em" }}
        ></div>
      </div>
      <div className="half">
        <div className="loading pa-3 ma-2"></div>
        <div className="loading pa-4 ma-5"></div>
        <div className="loading pa-3 ma-5"></div>
        <div className="loading pa-3 ma-5"></div>
      </div>
    </div>
  );
};
