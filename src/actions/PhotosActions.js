import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS } from '../constants/Photos';

import {loadData}  from '../utils/load';

export function setPhotos(url) {

  return (dispatch)=>{
      dispatch({
          type: GET_PHOTOS_REQUEST,
          payload: 'Please wait...!'
      });

      loadData(url).then((data)=>{
          dispatch({
              type: GET_PHOTOS_SUCCESS,
              payload: data
          });
      });
  }

}
