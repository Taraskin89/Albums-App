import React from 'react';
import { Link } from 'react-router-dom';

export default class ErrorPage extends React.Component {
    
    render() {
        return (
            <div className='alert alert-danger'>
                <h3>Сторінка не знайдена</h3>
                <p>Перейти на <Link to='/'>головну</Link></p>
            </div>
        );
    }
    
}
