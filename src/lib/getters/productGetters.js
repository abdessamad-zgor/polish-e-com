import {
  getAllProducts,
  getProductReviews,
  addProductReviews,
} from "../../firebase/actions";

const getAllProductsGetter = async () => {
  return getAllProducts();
};
const getProductReviewsGetter = async (id) => {
  try {
    let reviews = await getProductReviews(id);
    return reviews;
  } catch (err) {
    throw err;
  }
};

const addProductReviewsGetter = async (id, payload) => {
  try {
    const review = await addProductReviews(payload.author, payload.review, id);
    return review;
  } catch (err) {
    throw err;
  }
};

export {
  getAllProductsGetter,
  getProductReviewsGetter,
  addProductReviewsGetter,
};
