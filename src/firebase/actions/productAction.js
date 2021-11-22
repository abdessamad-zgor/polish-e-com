import { db } from "./index";

const addProductReviews = async function (author, review, id) {
  const productRef = db.collection("products").doc(id);
  let date = Date.now();

  return productRef
    .collection("reviews")
    .doc()
    .set({
      userName: author.fullName,
      review: review,
      publishedAt: date,
    })
    .then(() => {
      return productRef
        .collection("reviews")
        .where("publishedAt", "==", date)
        .then((snapshot) => {
          let review;
          snapshot.forEach((doc) => review.push({ ...doc.data() }));
          return review;
        })
        .catch((err) => {
          throw new Error(err.message);
        });
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};

const getProductReviews = async function (id) {
  return db
    .collection("products")
    .doc(id)
    .collection("reviews")
    .get()
    .then((snapshot) => {
      let reviews = [];
      snapshot.forEach((review) =>
        reviews.push({ ...review.data(), id: review.id })
      );
      return reviews;
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};

const getAllProducts = async function () {
  return db
    .collection("products")
    .get()
    .then((snapshot) => {
      let products = [];
      snapshot.forEach((doc) => products.push({ ...doc.data(), id: doc.id }));
      return products;
    });
};

export { addProductReviews, getAllProducts, getProductReviews };
