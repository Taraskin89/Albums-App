import React from 'react';
import  {
    Route,
    Link,
    NotFoundRouter
} from 'react-router-dom';

import Albums from './pages/albums/albums';
import ErrorPage from './pages/error/index';
import App from './app';
import Header from './components/header/index';
import { PhotosRoutes } from './pages/photos/index';
import Photo from './pages/photos/photo';


export const routes = (

        <div>
            <Header/>
            <Route exact path='/' component={ App }/>
                { PhotosRoutes }
                {/*<Route path='/*' component={ ErrorPage }/>*/}
        </div>

);