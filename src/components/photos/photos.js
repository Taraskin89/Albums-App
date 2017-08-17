import React from 'react';
import {PropTypes} from 'prop-types';
import {Link} from 'react-router-dom';

import CircularProgress from 'material-ui/CircularProgress';
import {CardMedia, CardTitle} from 'material-ui/Card';

export default class Photo extends React.Component{

    componentWillMount(){
        const currentPath = this.context.location.pathname;
        const currentPath2 = currentPath.substr(currentPath.length-4, 4);// get last 4 symbols
        const albumId = parseInt(currentPath2.replace(/\D+/g,""));
        const url = `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`;
        this.props.setPhotos(url);
    }


    render(){
        const { photos, fetching } = this.props;
        const currentPath = this.context.location.pathname;
        const currentPath2 = currentPath.substr(currentPath.length-4, 4);// get last 4 symbols
        const albumId = parseInt(currentPath2.replace(/\D+/g,""));
        return(
            <div className='row'>
                <div className="go-back">
                    <Link to="/albums" ><span className="go-back left-arrow"> </span></Link>
                    <h2>{'Album ' + albumId }</h2>
                </div>
                    {
                        fetching ? <CircularProgress size={80} thickness={5} className='circ-progress'/> :
                        photos.map((item, index)=>{
                            return <div key={ index }>
                                <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                                    <a href={ item.url } className='thumbnail'>
                                        <Link to={`/albums/album:${item.albumId}/photo:${item.id}`} >
                                            <CardMedia
                                                overlay={<CardTitle title={'Photo - ' + item.id} subtitle={item.title} />}
                                            >
                                                <img src={ item.thumbnailUrl } alt={ item.title }/>
                                            </CardMedia>
                                        </Link>
                                    </a>
                                </div>
                            </div>
                        })
                    }
            </div>
        );
    }
}

Photo.contextTypes = {
    albumId: React.PropTypes.number,
    location: React.PropTypes.object
};
