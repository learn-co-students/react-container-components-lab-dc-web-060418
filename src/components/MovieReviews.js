// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => {

  return(
    <div className="review-list">
      {reviews.map(review => {
        return (
          <div className="review" key={review.link.url}>
            <h2>{review.display_title}</h2>
            <h4>{review.byline}</h4>
            <p>{review.summary_short}</p>
            <p>{review.publication_date}</p>
          </div>
        )
      })}
    </div>
  )
  
}

export default MovieReviews
