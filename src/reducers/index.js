import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

import albums from './albums'
import photos from './photos'

export default combineReducers({
    routing: routerReducer,
    albums,
    photos
});
