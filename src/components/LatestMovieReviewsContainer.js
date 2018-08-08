import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "f98593a095b44546bf4073744b540da0";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }

  fetchMovieReviews = () => {
    fetch(URL)
      .then(response => response.json())
      .then(({ results }) => {
        console.log(results);
        this.setState({
          reviews: results
        });
      });
  };
  //
  // renderReviews = () => {
  //   this.state.reviews.map(review => {
  //     return <MovieReviews review={review} />;
  //   });
  // };

  componentDidMount() {
    this.fetchMovieReviews();
  }
  render() {
    return (
      <div className="latest-movie-reviews">
        <h2>The Latest Reviews:</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
