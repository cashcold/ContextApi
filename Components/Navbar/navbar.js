import React, { Component } from 'react';
import {MovieContext} from '../MovieContext/movieContext'
import './style.css'
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const{balance} = this.context
        return ( 
            <div className='navbarMain'>
                <h3>CashCold</h3>
                <p>Account Balance: {balance}</p>
            </div>
         );
    }
}
Navbar.contextType = MovieContext;
 
export default Navbar;