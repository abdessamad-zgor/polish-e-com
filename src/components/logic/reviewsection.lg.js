import { useState, useEffect } from "react";
import { useUser, useProducts } from "../../context";
import {
  getProductReviewsGetter,
  addProductReviewsGetter,
} from "../../lib/getters/productGetters";

export const reviewSectionLogic = () => {
  const [review, setReview] = useState({ stars: 0, reviewText: "" });

  const { products, productDispatch } = useProducts();

  useEffect(async () => {
    let reviews = await getProductReviewsGetter(products.inView.id);
    console.log(reviews);
    productDispatch({ type: "ADD_PRODUCT_REVIEWS", payload: reviews });
  }, [products.inView.id]);

  const onChangeReview = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const addProductReviews = async (id, payload) => {
    const review = await addProductReviewsGetter(id, payload);
    productDispatch({ type: "UPDATE_PRODUCT_REVIEW", payload: review });
  };

  return { review, products, onChangeReview, addProductReviews };
};
