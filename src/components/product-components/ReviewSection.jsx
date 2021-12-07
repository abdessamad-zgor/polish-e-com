import React from "react";
import styles from "../../styles/componentStyles/reviewsec.module";
import { reviewSectionLogic } from "../logic/reviewsection.lg";
import { Rating } from "react-simple-star-rating";

function ReviewSection() {
  const {
    review,
    products,
    onChangeReview,
    addProductReviews,
    userState,
    setRating,
  } = reviewSectionLogic();
  return (
    <div className={styles.reviewsec}>
      {/* product Reviews */}
      {products.inView.reviews !== undefined
        ? products.inView.reviews.map((reviewMap, key) => (
            <div key={key} className={styles.review}>
              <img
                id="avatar"
                src={reviewMap.avatar}
                className={styles.avatarImg}
              />
              <div className={styles.reviewContent}>
                <h3 className="pa-5 dfl-font">{reviewMap.userName}</h3>
                <Rating
                  readonly
                  size={20}
                  ratingValue={reviewMap.review.stars}
                />
                <p className="dfl-font pa-4">{reviewMap.review.reviewText}</p>
              </div>
            </div>
          ))
        : ""}
      <div className={styles.inputSec}>
        <div style={{ width: "10%" }}>
          <img
            id="avatar"
            src={userState.info.avatar}
            className={styles.avatarImg}
          />
        </div>
        <div className={styles.inputBx}>
          <Rating
            className={styles.rating}
            onClick={setRating}
            size={20}
            ratingValue={review.stars}
          />
          <input
            className={styles.input}
            name="reviewText"
            type="text"
            placeholder="Add Review ..."
            value={review.reviewText}
            onChange={onChangeReview}
          />
          <button className={styles.btn} onClick={addProductReviews}>
            Go
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewSection;
