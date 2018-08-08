// Code MovieReviews Here

import React from 'react';

const MovieReviews = ({reviews}) => {
    return (<ul className="review-list">
        {reviews.map(movie => <li className="review">{movie.display_title}</li>)}
    </ul>);
}
 
export default MovieReviews;