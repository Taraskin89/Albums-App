import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PhotoItem from './photoItem';
import * as photoActions from '../../actions/PhotoActions';


class PhotoRender extends Component {
	render() {
		const { photo } = this.props;
		const { getPhoto } = this.props.photoActions;
		
		return (
			<div className='container'>
				<PhotoItem getPhoto={ getPhoto }
                		   photo ={ photo.photo }
                		   fetching={photo.fetching}
				/>
			</div>
		);
	}
}
function mapStateToProps(state) {
  return {
    photo: state.photo
  }
}

function mapDispatchToProps(dispatch) {
  return {
      photoActions: bindActionCreators(photoActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoRender);

PhotoRender.contextTypes = {
  router: React.PropTypes.object.isRequired
};