import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import * as albumsActions from './actions/AlbumsActions';
import * as photosActions from './actions/PhotosActions';
import {Albums} from './pages/albums/albums';
import Header from './components/header/index';
import Photos from './pages/photos/photosList';

class App extends React.Component {

    render() {
        const { albums, photos } = this.props;
        const { setAlbums } = this.props.albumsActions;
        const { setPhotos } = this.props.photosActions;
        return(
            <div>
                <Albums
                    setAlbums={ setAlbums }
                    setPhotos={ setPhotos }
                    albums ={ albums.albums }
                    photos ={ photos.photos }
                    fetching={albums.fetching}
                />
                {/*{this.props.children}*/}
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    albums: state.albums,
    photos: state.photos
  }
}

function mapDispatchToProps(dispatch) {
  return {
      albumsActions: bindActionCreators(albumsActions, dispatch),
      photosActions: bindActionCreators(photosActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
