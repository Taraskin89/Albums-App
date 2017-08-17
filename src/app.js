import React, { Component } from 'react';
import $ from 'jquery';

import Header from './components/header/index';
import Main from './routes';

export default class App extends React.Component {
    componentWillMount(){
        $(function() {

            $(window).scroll(function() {
                if($(this).scrollTop() != 0) {
                    $('#toTop').fadeIn();
                } else {
                    $('#toTop').fadeOut();
                }
            });

            $('#toTop').click(function() {
                $('body,html').animate({scrollTop:0},800);
            });

        });
    }

  render() {
        return(
           <div className='conatiner'>
               <Header/>
               <Main/>
               <div id="toTop"><span> </span></div>
          </div>
      );
   }
}
