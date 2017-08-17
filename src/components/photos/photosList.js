import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    Switch,
    Route,
    Link
} from 'react-router-dom';
import PropTypes from 'prop-types';

import * as photosActions from '../../actions/PhotosActions';
import * as albumsActions from '../../actions/AlbumsActions';
import Photo from './photos';


class PhotosList extends React.Component{

    render(){

        const { photos} = this.props;
        const { setPhotos } = this.props.photosActions;

        return(
            <div className='container'>
                <Photo setPhotos={ setPhotos }
                    photos={ photos.photos }
                    fetching={ photos.fetching }
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        photos: state.photos,
        albums: state.albums
    }
}

function mapDispatchToProps(dispatch) {
    return {
        photosActions: bindActionCreators(photosActions, dispatch),
        albumsActions: bindActionCreators(albumsActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotosList);