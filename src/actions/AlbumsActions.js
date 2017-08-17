import { GET_ALBUMS_REQUEST, GET_ALBUMS_SUCCESS } from '../constants/Albums';

import { loadData }  from '../utils/load';

export function setAlbums(url) {

  return (dispatch)=>{
      dispatch({
          type: GET_ALBUMS_REQUEST,
          payload: 'Please wait...!'
      });

      loadData(url).then((data)=>{
          dispatch({
              type: GET_ALBUMS_SUCCESS,
              payload: data
          });
      });
  }

}
