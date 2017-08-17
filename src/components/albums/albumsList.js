import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import * as albumsActions from '../../actions/AlbumsActions';

import Album from './album';


class AlbumsList extends React.Component {

  render() {
        const { albums } = this.props;
        const { setAlbums } = this.props.albumsActions;
        return(
            <div className="container">

                <Album
                    setAlbums={ setAlbums }
                    albums ={ albums.albums }
                    fetching={albums.fetching}
                />
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

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsList);

AlbumsList.contextTypes = {
  router: React.PropTypes.object.isRequired
};