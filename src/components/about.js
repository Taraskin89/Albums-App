import React from 'react';
import { Link } from 'react-router-dom';

export default class About extends React.Component{

    static path = '/about';

    render(){
        return(
            <div className="container">
                <div className="go-back">
                    <Link to='/'><span className="go-back left-arrow"> </span></Link>
                    <h2 className='title albums-title'>About</h2>
                </div>
                <p></p>
            </div>
        );
    }
}
