// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {
  return(  <ul className="review-list">
        {props.reviews.map(review => {
           return( <li className="review">
                <h1>{review.display_title}</h1>
                <h2>{review.byline}</h2>
                <div>
                {review.mpaa_rating !== '' ? <span>Rated:{review.mpaa_rating}</span> : null}
                    <span>  Critic Score: {review.critics_pick}</span>
                    <span>  Opening date: {review.opening_date}</span>
                    <span>  Date Updated: {review.date_updated}</span>
                </div>
                <p>{review.summary_short}</p>
            </li>)
        })}
    </ul>);
}

export default MovieReviews