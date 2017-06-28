import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

export default class Header extends React.Component {
    
    static path = '/';
    
    render() {
        return (

            <nav className='navbar navbar-default'>
                <div className='container-fluid'>
                    <div className='navbar-header'>
                        <a className='navbar-brand' href='#'>Albums-App</a>
                    </div>
                    <ul className='nav navbar-nav'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/photos'>Photos</Link></li>
                        {/*<li><Link to='/*'>Error page</Link></li>*/}
                    </ul>
                </div>
            </nav>

        );
    }
    
}
