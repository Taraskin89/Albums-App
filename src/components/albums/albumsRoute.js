import React, { Component } from 'react';
import  {
    Route,
    Link,
    NotFoundRouter,
    Switch
} from 'react-router-dom';
import AlbumsList from './albumsList';
import PhotoRoute from '../photo/photoRoute';

export default class AlbumsRoute extends Component {

	getChildContext() {
    return {
      location: this.props.location
    }
  }


	render() {
		return (
			<Switch>
				<Route exact path='/albums' component={ AlbumsList }/>
    			<Route path='/albums/album:id' component={ PhotoRoute }/>
			</Switch>
		);
	}
}

AlbumsRoute.childContextTypes = {
    location: React.PropTypes.object
}