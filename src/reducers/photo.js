import { GET_PHOTO_REQUEST, GET_PHOTO_SUCCESS } from '../constants/Photo';

const initialState = {
    photo: [],
    fetching: false
};

export default function photos(state = initialState, action){

    switch (action.type){
        case GET_PHOTO_REQUEST:
            return{...state, fetching: true};
        case GET_PHOTO_SUCCESS:
            return{
                ...state,
                photo: action.payload,
                fetching: false
            };
        default:
            return state;
    }
}