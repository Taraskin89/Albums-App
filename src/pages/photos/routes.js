import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import  Photos  from './photosList';
import Albums from '../albums/albums';
import Photo from './photo';

export default (
    <div>
            <Route component={ Photos } path={ Photos.path } />
            <Route component={ Photo } path={ Photo.path } />

    </div>

);
