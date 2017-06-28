import React from 'react';
import {Link} from 'react-router-dom';

export default class PhotoItem extends React.Component{

    static path = '/';

    componentWillMount(){
        const  albumId = 10;
        const url = `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`;
        this.props.setPhotos(url);
    }

    showLog(){
        console.log(this.props);
    }
    render(){
        const { photos, fetching, albumId } = this.props;
        console.log(albumId);

        return(
            <div>
                <div className='row' >
                    {
                        fetching ? <p>Loading ...</p> :
                        photos.map((item, index)=>{
                            return <div key={ index }>
                                <div className='col-sm-8 col-md-3'>
                                    <Link to="/photos/photo" >
                                        <img src={ item.thumbnailUrl } alt={ item.title }/>
                                    </Link>
                                    <a href={ item.url } className='thumbnail'>
                                    </a>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        );
    }
}

