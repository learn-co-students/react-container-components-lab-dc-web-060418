// Code MovieReviews Here
import React from 'react';

const movieReviewsList = reviews => {
  return reviews.map((review, index) => (
    <div className="review" key={index}>
      <h3>{review.display_title}</h3>
      <p>{review.summary_short}</p>
    </div>
  ));
};

const MovieReviews = ({reviews}) => (
  <div className="review-list">
    {movieReviewsList(reviews)}
  </div>
);

export default MovieReviews;
