import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { Switch }  from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import configureStore from './configureStore';
import App from './app';
import Albums from './pages/albums/albums';
import Photos from './pages/photos/photos';
import ErrorPage from './pages/error/index';
import routes from './routes';

const store = configureStore();
const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ history }>
            <Switch>
                <Route path='/' component={ App }/>
                <Route path='/albums' component={ Albums }>
                    <Route path='/photos' component={ Photos }/>
                </Route>
            </Switch>
        </Router>
    </Provider>

    ,document.getElementById("app")
);