import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {

  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  searchApi() {
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=${NYT_API_KEY}`)
      .then(resp => resp.json())
      .then(json => {
        this.setState({reviews: json.results})
      })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.searchApi()
  }

  handleTextInput = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <h1>Search For Movie</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleTextInput}></input>
          <input type="submit"></input>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>

    )
  }
}

export default SearchableMovieReviewsContainer
