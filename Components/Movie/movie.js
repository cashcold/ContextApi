import React, { Component } from 'react';
class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        }
    }
    componentDidMount(){
    }
    render() { 
        return ( 
            <div className='MovieMain'>
                {/* {this.state.movies.map(movie => (
                    <li>{movie.name}</li>
                ))} */}
            </div>
         );
    }
}
 
export default Movie;