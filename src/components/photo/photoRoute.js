import React, { Component } from 'react';
import  {
    Route,
    Link,
    NotFoundRouter,
    Switch
} from 'react-router-dom';
import PhotoRender from './index';
import PhotosList from '../photos/photosList';


export default class PhotoRoute extends Component {

	getChildContext() {
        return {
            location: this.props.location
        }
    }


	render() {
		return (
			<Switch>
                <Route exact path='/albums/album:id' component={ PhotosList }/>
				<Route  path='/albums/album:id/photo:id' component={ PhotoRender }/>
			</Switch>
		);
	}
}

PhotoRoute.childContextTypes = {
    location: React.PropTypes.object
}