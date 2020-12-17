import React, { Component } from 'react';
import Movie from '../Movie/movie';
import {MovieContext} from '../MovieContext/movieContext'
class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: ''
        }
        
    }
    // static contextType = MovieContext;
   
    componentDidMount(){
        
        // let value = this.context;
        // console.log(value)
    }
    render() { 
    //   console.log(this.context)
      const {name,balance} = this.context;
        return ( 
            <div className='movieListMain'>
                <h3>Name: {name}</h3>
                <p>Account Balance: {balance}</p>
            </div>
         );
    }
}
MovieList.contextType = MovieContext;
 
export default MovieList;