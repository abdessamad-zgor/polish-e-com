import React from "react";
import styles from "../../styles/componentStyles/reviewsec.module";
import { reviewSectionLogic } from "../logic/reviewsection.lg";

function ReviewSection() {
  const { review, products, onChangeReview, addProductReviews } =
    reviewSectionLogic();
  return (
    <div className={styles.reviewsec}>
      {/* product Reviews */}
      {products.inView.reviews !== undefined
        ? products.inView.reviews.map((reviewMap, key) => (
            <div key={key} className={styles.review}>
              <div style={{ width: "10%" }}>
                <div id="avatar" className={styles.avatar}></div>
              </div>
              <div className={styles.reviewContent}>
                <h4>{reviewMap.userName}</h4>
                <p>{reviewMap.review.reviewText}</p>
              </div>
            </div>
          ))
        : ""}
      <div className={styles.inputSec}>
        <div style={{ width: "10%" }}>
          <div id="avatar" className={styles.avatar}></div>
        </div>
        <div className={styles.inputBx}>
          <input
            className={styles.input}
            type="text"
            placeholder="Add Review ..."
            value={review.reviewText}
            onChange={onChangeReview}
          />
          <button
            className="btn"
            onClick={() => {
              addProductReviews(review, id);
            }}
          >
            Go
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewSection;
