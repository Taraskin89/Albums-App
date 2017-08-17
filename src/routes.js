import React from 'react';
import  {
    Route,
    Link,
    NotFoundRouter,
    Switch
} from 'react-router-dom';


import Home from './components/home';
import Contact from './components/conatct';
import About from './components/about';
import AlbumsRoute from './components/albums/albumsRoute';


export default class Main extends React.Component{
  render(){
    return(
        <div>
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/albums' component={ AlbumsRoute } />
            <Route path='/about' component={ About } />
            <Route path='/contact' component={ Contact } />
          </Switch>
        </div>
    );
  }
}