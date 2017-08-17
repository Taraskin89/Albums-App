import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import CircularProgress from 'material-ui/CircularProgress';
import FlatButton from 'material-ui/FlatButton';



export default class AlbumRoute extends React.Component{

    componentWillMount(){
        const url = 'https://jsonplaceholder.typicode.com/albums';
        this.props.setAlbums(url);
    }

    getAlbumId(e){
    	console.log(e.target.id);
        const id = e.target.id
  	}

    render(){
        const { albums, fetching } = this.props;
        return (
                <div className='row' >
                    <div className="go-back">
                        <Link to='/'><span className="go-back left-arrow"> </span></Link>
                        <h2 className='title albums-title'>All Albums</h2>
                    </div>

                {
                    fetching ? <CircularProgress size={80} thickness={5} className='circ-progress' /> :
                    albums.map((item, index)=> 
                    <div key={ index } className='album-item col-sm-4 col-xs-4 col-md-5 col-lg-3'>
                        <div className='thumbnail'> 
                            <img src='...' alt='...'/>
                            <div className='caption'>
                                <h3> Album #{ item.id }</h3>
                                { "User - " + item.userId }
                                <p className='titleAlbums'>{ item.title }</p>
                                <Link 
                                    id={ item.id } 
                                    to={`/albums/album:${item.id}`}
                                    onClick = { ::this.getAlbumId }
                                >  <FlatButton label="View photos" secondary={true} /> </Link>
                             </div>
                        </div>
                    </div>                   
                )}
                </div>
        );
    }
}

AlbumRoute.propTypes = {
  setAlbums: React.PropTypes.func.isRequired
};
AlbumRoute.contextTypes = {
  albumId: React.PropTypes.number,
  router: React.PropTypes.object.isRequired,
  location: React.PropTypes.object
};
