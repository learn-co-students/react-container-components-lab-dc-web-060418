// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => (
    <div className="review-list">
        {props.reviews.map(review => {
            // console.log(review)
            return (<div className="review" key={props.reviews.indexOf(review)}>
            <h2>{review.headline}</h2>
            <p>by {review.byline}</p>
            <p>{review.summary_short}</p>
            </div>)
        })}
    </div>
);

export default MovieReviews;