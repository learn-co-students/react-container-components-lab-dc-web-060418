// Code MovieReviews Here
import React, {Component} from "react"



const MovieReviews = (props) => {
    return(
        <ul className="review-list">
            {props.reviews.map(review => <li className="review"></li>)}
        </ul>
    )
}

export default MovieReviews;