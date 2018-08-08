import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "f98593a095b44546bf4073744b540da0";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      searchTerm: ""
    };
  }

  handleSearchInputChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.fetchMatchingReviews();
  };

  fetchMatchingReviews = () => {
    fetch(URL + "&query=" + this.state.searchTerm)
      .then(response => response.json())
      .then(({ results }) => {
        console.log(results);
        this.setState({
          reviews: results
        });
      });
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h1>Your Custom Movie Reviews</h1>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            onChange={this.handleSearchInputChange}
            value={this.state.searchTerm}
          />
          <input type="submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
