import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS } from '../constants/Photos';

const initialState = {
    photos: [],
    fetching: false
};

export default function photos(state = initialState, action){

    switch (action.type){
        case GET_PHOTOS_REQUEST:
            return{...state, fetching: true};
        case GET_PHOTOS_SUCCESS:
            return{
                ...state,
                photos: action.payload,
                fetching: false
            };
        default:
            return state;
    }
}