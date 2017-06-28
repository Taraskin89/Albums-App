import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS } from '../constants/Photos';
import $ from 'jquery';

//import loadData  from '../utils/load';


function loadData(url) {
    return new Promise((resolve, reject)=>{
        $.ajax({
            url: url,
            type: 'GET',
            async: false,
            dataType: 'jsonp',
            connectType: 'application/json; charset=utf8',

            success: (data)=>{
                resolve(data);
            },
            error: ()=>{
                reject();
            }
        });
    });

}




export function setPhotos(url) {

  return (dispatch)=>{
      // dispatch({
      //     type: GET_PHOTOS_REQUEST,
      //     payload: year
      // });

      loadData(url).then((data)=>{
          dispatch({
              type: GET_PHOTOS_SUCCESS,
              payload: data
          });
      });
  }

}

// export function openAlbums(payload) {
//     return(dispatch)=>{
//         dispatch({
//             type: ROUTING,
//             payload:{
//                 method: 'push',
//                 nextUrl: '/photos'
//             }
//         })
//     }
// }
