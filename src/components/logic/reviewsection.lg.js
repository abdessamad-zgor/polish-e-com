import { useState, useEffect } from "react";
import { useUser, useProducts } from "../../context";
import {
  getProductReviewsGetter,
  addProductReviewsGetter,
} from "../../lib/getters/productGetters";

export const reviewSectionLogic = () => {
  const [review, setReview] = useState({ stars: 0, reviewText: "" });

  const { products, productDispatch } = useProducts();
  const { userState } = useUser();

  useEffect(async () => {
    let reviews = await getProductReviewsGetter(products.inView.id);

    productDispatch({ type: "ADD_PRODUCT_REVIEWS", payload: reviews });
  }, [products.inView.id]);

  const onChangeReview = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const setRating = (rate) => {
    setReview({ ...review, stars: rate });
  };

  const addProductReviews = async () => {
    const reviewNew = await addProductReviewsGetter(
      { author: userState.info, review },
      products.inView.id
    );
    productDispatch({ type: "UPDATE_PRODUCT_REVIEW", payload: reviewNew[0] });
  };

  return {
    review,
    products,
    onChangeReview,
    addProductReviews,
    userState,
    setRating,
  };
};
