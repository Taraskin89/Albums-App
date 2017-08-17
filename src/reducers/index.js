import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

import albums from './albums';
import photos from './photos';
import photo from './photo';

export default combineReducers({
    routing: routerReducer,
    albums,
    photos,
    photo
});
