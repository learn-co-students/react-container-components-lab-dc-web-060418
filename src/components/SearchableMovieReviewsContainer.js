import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ""
  };

  getUrl = () => {
    return URL + `&query=${this.state.searchTerm}`;
  }

  componentDidMount() {
    fetch(this.getUrl())
      .then(response => response.json())
      .then(response => this.setState({reviews: response.results}));
  }

  handleSubmit = event => {
    event.preventDefault();
    let newSearchTerm = "";
    try {
      newSearchTerm = event.target.children[0].value;
    } catch (error) {
      newSearchTerm = "";
    } finally {
      this.setState({searchTerm: newSearchTerm});
    }
  };
  
  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text"></input>
          <input type="submit"></input>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
 
}
