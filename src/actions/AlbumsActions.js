import { GET_ALBUMS_REQUEST, GET_ALBUMS_SUCCESS } from '../constants/Albums';
import { ROUTING } from '../constants/Routing';
import $ from 'jquery';

//import loadData  from '../utils/load';

const url = 'https://jsonplaceholder.typicode.com/albums';

const loadData = new Promise((resolve, reject)=>{
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





export function setAlbums() {

  return (dispatch)=>{
      // dispatch({
      //     type: GET_ALBUMS_REQUEST,
      //     payload: year
      // });

      loadData
          .then((data)=>{
              dispatch({
                  type: GET_ALBUMS_SUCCESS,
                  payload: data
                  //},1000)
              });
          });

      //setTimeout(()=>{

  }

}

export function openAlbums(payload) {
    return(dispatch)=>{
        dispatch({
            type: ROUTING,
            payload:{
                method: 'push', //или, например, replace
                nextUrl: '/photos'
            }
        })
    }
}
