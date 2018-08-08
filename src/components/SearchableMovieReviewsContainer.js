import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='
            ;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends React.Component{
    constructor(){
        super()
        this.state ={
            reviews:[],
            searchTerm: ''
        }
    }


    render(){
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.submitHandler}>
                    <input type="text" value={this.searchTerm} onChange={this.searchHandler}/>
                    <input type="submit"/>
                </form>
            
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }

    searchFetch = () => {
        fetch(`${URL}` + this.state.searchTerm + `&api-key=${NYT_API_KEY}`)
        .then(response => response.json())
        .then(response => this.setState({reviews: response.results}))
    }

    submitHandler= (e)=> {
        e.preventDefault();
        this.searchFetch();
    }

    searchHandler = (e) =>{
        this.setState({
            searchTerm: e.target.value
        })
    }
}
