import React from 'react';
import { Router, Route } from 'react-router';
import { NavLink, Redirect, Switch } from 'react-router-dom';

import Albums from './pages/albums/albums';
//import AlbumsRoutes from './pages/albums/routes';
import ErrorPage from './pages/error/index';
import App from './app';
import {AlbumsRoutes} from './pages/albums/index';
import {PhotosRoutes} from './pages/photos/index';


export default(

    <Route>
        <Switch>
            <Route path='/' component={ App } />
            { AlbumsRoutes }
            { PhotosRoutes }
        </Switch>
    </Route>

);