// Ajax request from API
import React from 'react';
import $ from 'jquery';

export const loadData =  function (url) {
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