import React from "react";

const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <div className="review" key={index}>
          <h2>{`${review.headline} by ${review.byline}`}</h2>
          <p>{review.summary_short}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieReviews;
