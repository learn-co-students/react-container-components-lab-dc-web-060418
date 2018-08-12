import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "f98593a095b44546bf4073744b540da0";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
  state = {
    searchTerm: "",
    reviews: []
  };

  getSearchTerm = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  fetchReviews = event => {
    event.preventDefault();
    fetch(
      `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=${
        this.state.searchTerm
      }`
    )
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          reviews: data.results
        })
      );
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.fetchReviews}>
          <input
            type="text"
            onChange={this.getSearchTerm}
            value={this.state.searchTerm}
          />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
