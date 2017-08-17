import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 30,
};

export default class Home extends Component {
	render() {
		return (
			<div className="container home-ctrl">
				<h1 className='title'>Wellcome to Albums App</h1>
				<Link to='/albums'>
					<RaisedButton label="Show All Albums" primary={true} style={style} />
				</Link>
			</div>
		);
	}
}
