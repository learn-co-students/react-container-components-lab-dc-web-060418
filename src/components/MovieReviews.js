// Code MovieReviews Here
import React from 'react';

// const MovieReviews = (props) => {
//     return (
//         <div className="review-list">
//             {props.reviews.map(review => {
//                 <h2>{review.title}</h2>
//             })}
//         </div>
//     )
// }

// export default MovieReviews

const Review = ({
  headline,
  byline,
  link,
  summary_short
}) => {
  return (

    <div
      key={headline}
      className="review"
    >
      <header>
        <a
          className="review-link"
          href={link.url}
        >
          {headline}
        </a>
        <br/>
        <span className="author">{byline}</span>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  );
};

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;