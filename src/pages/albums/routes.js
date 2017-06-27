import React from 'react';
import { Route } from 'react-router';
import Albums from './albums';

export default (
    <Route>
        <Route component={ Albums } path={ Albums.path } />
    </Route>
);
