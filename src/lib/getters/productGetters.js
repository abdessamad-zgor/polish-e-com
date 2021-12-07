import {
  getAllProducts,
  getProductReviews,
  addProductReviews,
  getAllCategories,
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

const addProductReviewsGetter = async (payload, id) => {
  try {
    const review = await addProductReviews(payload.author, payload.review, id);
    return review;
  } catch (err) {
    throw err;
  }
};

const getAllCategoriesGetter = async () => {
  return getAllCategories();
};

export {
  getAllProductsGetter,
  getProductReviewsGetter,
  addProductReviewsGetter,
  getAllCategoriesGetter,
};
