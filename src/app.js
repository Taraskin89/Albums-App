import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import * as albumsActions from './actions/AlbumsActions';
import Header from './components/header/index';
import Albums from './pages/albums/albums';
import Photos from './pages/photos/photos';

class App extends React.Component {

    render() {
        const { albums } = this.props;
        const { setAlbums } = this.props.albumsActions;
        return(
            <div>
                <Header/>
                <Albums
                    setAlbums={ setAlbums }
                    albums ={ albums.albums }
                    fetching={albums.fetching}
                />
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    albums: state.albums
  }
}

function mapDispatchToProps(dispatch) {
  return {
    albumsActions: bindActionCreators(albumsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
