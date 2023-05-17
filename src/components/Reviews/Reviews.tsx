import React from "react";
import { reviews } from "../../core/constants/reviews";
import { General } from "../../core/models";

const Reviews = () => {
  return (
    <section className="reviews">
      <div className="reviews-container">
        <div className="reviews-container-txt">
          <h1 className="reviews-container-txt__title">
            Client <i>reviews</i>
          </h1>
          <p className="reviews-container-txt__desc">
            Happy clients, happy us. Read our client reviews about the work
            process and results.
          </p>
        </div>
        <div className="reviews-container-list">
          {reviews.map((review: General.Review) => {
            const { author, content } = review;

            return (
              <div className="reviews-container-list__item" key={content}>
                <p className="reviews-container-list__item-content">
                  {content}
                </p>
                <i className="reviews-container-list__item-author">{author}</i>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
