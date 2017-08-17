import { GET_PHOTO_REQUEST, GET_PHOTO_SUCCESS } from '../constants/Photo';

import { loadData }  from '../utils/load';

export function getPhoto(url) {

  return (dispatch)=>{
      loadData(url).then((data)=>{
          dispatch({
              type: GET_PHOTO_REQUEST,
              payload: 'Please wait...!'
          });

          dispatch({
              type: GET_PHOTO_SUCCESS,
              payload: data
          });
      });
  }

}