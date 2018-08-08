import React from "react";

const MovieReviews = props => {
  return (
    <div className="review-list">
      {props.reviews.map(review => {
        return (
          <p className="review" key="review">
            {review.display_title}
          </p>
        );
      })}
    </div>
  );
};

export default MovieReviews;
