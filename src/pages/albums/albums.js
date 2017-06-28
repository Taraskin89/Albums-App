import React from 'react';
import ReactDOM from 'react-dom';
import { PropTypes } from 'prop-types';
import {Link} from 'react-router-dom';

import { Photos } from '../photos/index';
import PhotoItem from '../photos/photoItem';

export class Albums extends React.Component{

    static path = '/albums';

    componentWillMount(){
        this.props.setAlbums();
        //this.props.setPhotos();
    }

    showLog(e){
        //const albumId = parseInt(e.target.innerText);
        return <PhotoItem {...this.props} albumId = { 10 } />;
        //console.log(parseInt(e.target.innerText));
    }

    render(){
        const { albums, photos, fetching } = this.props;
        return (
            <div className='container'>
                <div className='row' >
                {
                    fetching ? <p>Loading ...</p> :
                    albums.map((item, index)=>
                    <div key={ index } className='col-sm-8 col-md-3'>
                        <div className='thumbnail'>
                            User - { item.userId }
                            <img src='...' alt='...'/>

                            <div className='caption'>
                                <h3>
                                    <span ref='albumId'>
                                        Album #{ item.id }
                                    </span>
                                </h3>
                                <p className='titleAlbums'>{ item.title }</p>
                                <span id={ item.id }>
                                    <Link id={ item.id } to='/photos' onClick={ this.showLog.bind(this) }>
                                        <p>{ item.id }</p>View photos
                                    </Link>
                                </span>
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
