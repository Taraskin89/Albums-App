import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import * as photosActions from '../../actions/PhotosActions';
import * as albumsActions from '../../actions/AlbumsActions';
import PhotoItem from './photoItem';


class Photos extends React.Component{
    static path = '/photos';

    render(){
        const { photos, albums } = this.props;
        const { setPhotos } = this.props.photosActions;
        const { setAlbums } = this.props.albumsActions;

        return(
            <div className='container'>
                <div className='goback'>
                    <Link to='/'>
                        <button type="button" className="btn btn-default">
                            <span className='glyphicon glyphicon-arrow-left'>
                            </span>
                        </button>
                    </Link>
                </div>
                <PhotoItem setPhotos={ setPhotos }
                           setAlbums={ setAlbums }
                           albums={ albums.albums }
                           photos={ photos.photos }
                           fetching={ photos.fetching }
                />
                {/*{this.props.children}*/}
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

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
