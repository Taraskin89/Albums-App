import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import CircularProgress from 'material-ui/CircularProgress';


export default class photoItem extends Component {

	componentWillMount(){
        const currentPath = this.context.location.pathname;
        const currentPath2 = currentPath.substr(currentPath.length-4, 4);// get last 4 symbols
        const photoId = parseInt(currentPath2.replace(/\D+/g,""));
        const url = `https://jsonplaceholder.typicode.com/photos/${photoId}`; 
		this.props.getPhoto(url);
	}

	render() {
		const { photo, fetching } = this.props;
		return (
			<div className='row'>
				<div className="go-back">
					<Link to={`/albums/album:${photo.albumId}`}><span className="go-back left-arrow"> </span></Link>
					<h2>{'Album ' + photo.albumId + '/ Photos ' + photo.id }</h2>
				</div>
				{
                    fetching ? <CircularProgress size={80} thickness={5} className='circ-progress' /> :
					<div className='photo-preview'>
						<img src={ photo.url } />
						<aside><h3>{photo.title}</h3></aside>
					</div>
				}
			</div>
		);
	}
}
photoItem.contextTypes = {
    location: React.PropTypes.object
};