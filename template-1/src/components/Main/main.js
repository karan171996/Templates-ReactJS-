import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from '../../container/Home/home';
import About from '../../container/About/about';
import Services from '../../container/Services/services';
class Main extends Component {
    render() {
        return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/services' component={Services}/>
    </Switch>
        );
    }
}

export default Main;