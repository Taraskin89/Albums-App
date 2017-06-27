import React from 'react';
import { Route } from 'react-router';
import Photos from './photos';

export default (
    <Route>
        <Route component={ Photos } path={ Photos.path } />
    </Route>
);
