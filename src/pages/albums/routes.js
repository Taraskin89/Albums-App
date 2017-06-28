import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Albums from './albums';

export default (
    <Route>
        <Route component={ Albums } path={ Albums.path } />
    </Route>
);
