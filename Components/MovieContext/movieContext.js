import React, { Component, } from 'react';

export const MovieContext = React.createContext()


export class MovieProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: 'Bob falling',
            balance: '$74500'
         }
    }
    render() { 
        const{ name,balance} = this.state;
        return ( 
            <MovieContext.Provider value={{name,balance}}>
                {this.props.children}
            </MovieContext.Provider>
         );
    }
}
 