import React from "react";
import styles from "../../styles/componentStyles/productcard.module";
import { CartAddIcon } from "../icons";
import { useLogic } from "../logic/productcard.lg";

function Productcard({ product, small, noAction }) {
  const { setProductInView, addToCart } = useLogic(product);
  return (
    <div className={styles.root}>
      {!small ? (
        <div className={styles.medium}>
          <div className={styles.productImage}>
            <img onClick={setProductInView} src={product.images[0]} />
          </div>
          <div className={styles.productActions}>
            {!noAction ? (
              <>
                <h3 className="dfl-font grey"> {product.title}</h3>
                <p
                  style={{ color: "grey", float: "left" }}
                  className="thin small dfl-font pa-3"
                >
                  {product.price}DH
                </p>
                <div className="flex container ">
                  <div
                    className="fab-tiny"
                    style={{ float: "left" }}
                    onClick={addToCart}
                  >
                    <CartAddIcon />
                  </div>
                </div>
              </>
            ) : (
              <>
                <h3 className="dfl-font grey"> {product.title}</h3>

                <p className="thin small pa-3">{product.price}DH</p>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className={styles.small}>
          <div className={styles.productImage}>
            <img
              onClick={() => {
                productDispatch({ type: "SET_PRODUCT_INVIEW_INIT" });
                history.push(`/products/${product.slug}`);
                productDispatch({
                  type: "SET_PRODUCT_INVIEW",
                  payload: product,
                });
              }}
              src={product.images[0]}
            />
          </div>
          <div className={styles.details}>
            <h3 className="lgh-font display-font ">{product.title}</h3>
            <p
              style={{ color: "grey", float: "left" }}
              className="thin small dfl-font pa-3"
            >
              {product.price}DH
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Productcard;
