import React from 'react';
import { Link } from 'react-router-dom';

export default class Contact extends React.Component{

    static path = '/contact';

    render(){
        return(
            <div className='container'>
                <div className="go-back">
                    <Link to='/'><span className="go-back left-arrow"> </span></Link>
                    <h2 className='title albums-title'>Contact</h2>
                </div>

            </div>
        );
    }
}
