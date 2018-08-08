import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
//             + `api-key=${NYT_API_KEY}`;
const SEARCH_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='

// Code SearchableMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleSearchWord = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(SEARCH_URL+this.state.searchTerm+`&api-key=${NYT_API_KEY}`)
        fetch(SEARCH_URL+this.state.searchTerm+`&api-key=${NYT_API_KEY}`).then(r => r.json()).then(json => json.results)
        .then(results => {
            this.setState({
                reviews: results
            })
        }).catch(er => console.log)
    }
    render() {
        return (
            <div className="searchable-movie-reviews">Searchable movie reviews
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.searchTerm} onChange={this.handleSearchWord}/>
                <input type="submit" />
            </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        ) 
    }
};

export default LatestMovieReviewsContainer;