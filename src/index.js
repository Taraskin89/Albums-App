import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter }  from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import configureStore from './configureStore';
import App from './app';

const store = configureStore();
const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
    <Provider store={ store }>
        <BrowserRouter history={ history } >
            <MuiThemeProvider>
                <App/>
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>

    ,document.getElementById("app")
);