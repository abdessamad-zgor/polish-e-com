import { useState, useEffect, useRef } from "react";
// import useScroll from "../../lib/useScroll";
// import detectViewport from "../../lib/detectViewport";
import { useProducts } from "../../context";
import { useParams } from "react-router-dom";

export const productDetailsLogic = () => {
  const { slug } = useParams();
  const [activeNav, setActive] = useState(false);
  const { products, productDispatch } = useProducts();

  const findProduct = () => {
    if (products.all.length > 0) {
      let product = products.all.filter((product) => product.slug == slug)[0];

      return product;
    } else {
      return {};
    }
  };

  //IN CASE THE PAGE IS REDIRECTED TO WITHOUT CLICKING ON PRODUCTCArd
  //why
  useEffect(() => {
    let product = findProduct();
    productDispatch({ type: "SET_PRODUCT_INVIEW", payload: product });
  }, [products.all.length]);

  // useEffect(() => {
  //   if (element.current != null) {
  //     setActive(!detectViewport(element));
  //     console.log(element.current);
  //   } else {
  //     setActive(false);
  //   }
  // }, [scroll, element]);

  let checkProductInView =
    products.pending || Object.keys(products.inView).length == 0;

  return { activeNav, products, checkProductInView };
};
