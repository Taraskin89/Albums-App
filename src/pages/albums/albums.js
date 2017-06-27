import React from 'react';
import { PropTypes } from 'prop-types';
import {Link} from 'react-router-dom';

import { Photos } from '../photos/index';


export default class Albums extends React.Component{

    static path = '/albums';

    componentWillMount(){
        this.props.setAlbums();
    }

    showLog(){
        alert('done');
    }

    render(){
        const { albums, fetching } = this.props;
        return (
            <div className='container'>
                <div className='row' >
                { fetching ? <p>Loading ...</p> :
                albums.map((item, index)=>
                        <div key={ index } className='col-sm-8 col-md-3'>
                            <div className='thumbnail'>
                                User - { item.userId }
                                <img src='...' alt='...'/>
                                    <div className='caption'>
                                        <h3>Album #{ item.id }</h3>
                                        <p className='titleAlbums'>{ item.title }</p>
                                        <p>
                                            {/*<a href='#' className='btn btn-primary' role='button'>*/}
                                                <Link to='/photos' onClick={ ::this.showLog }>View photos</Link>
                                            {/*</a>*/}
                                        </p>
                                    </div>
                            </div>
                        </div>
                )
            }
                </div>
            </div>
        );
    }
}

Albums.propTypes = {
  setAlbums: React.PropTypes.func.isRequired
};
