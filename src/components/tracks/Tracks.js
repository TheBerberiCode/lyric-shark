import React, {Component} from 'react';
import {Consumer} from '../../context';

class Tracks extends Component {
    
    render () {
        
        return (
        
            <React.Fragment>
            <Consumer>
                {value => {
                   console.log(value);
                    return <h1> Tracks </h1>;
                }}
            </Consumer>
            </React.Fragment>
        );  
    }
    
}

export default Tracks;