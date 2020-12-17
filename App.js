import React, { Component } from 'react';
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MovieList from './Components/MovieList/MovieList';
import Navbar from './Components/Navbar/navbar';
import {MovieContext, MovieProvider} from './Components/MovieContext/movieContext'
class MainApp extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <Router>
                <MovieProvider>
                <div className='mainApp animate__animated animate__zoomIn animate__slowerss'>
                    <div className='wrapper'>
                        <Navbar/>
                        <MovieList/>
                        <div className='switch'>
                            {/* <Route path='/child' exact component={Child}/>  */}
                        </div>
                    </div>
                </div>
                </MovieProvider>
            </Router>
         );
    }
}
 
export default MainApp;