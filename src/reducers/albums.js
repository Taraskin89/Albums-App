import { GET_ALBUMS_REQUEST, GET_ALBUMS_SUCCESS } from '../constants/Albums';

const initialState = {
    albums: [],
    fetching: false
};

export default function albums(state = initialState, action){

    switch (action.type){
        case GET_ALBUMS_REQUEST:
            return{...state, fetching: true};
        case GET_ALBUMS_SUCCESS:
            return {
                ...state,
                albums: action.payload,
                fetching: false
            };
        default:
            return state;
    }
}