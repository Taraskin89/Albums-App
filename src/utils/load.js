// Ajax request from API
import React from 'react';
import $ from 'jquery';

 const loadData =
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'jsonp',
        connectType: 'application/json; charset=utf8',

        success: (data)=>{
           console.log('load Data success!', data);
        },
        error: ()=>{
            console.log('load Data ERROR!', url);
        }
    });

 export default loadData;