import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DetailScreen from './DetailScreen'
import { BrowserRouter, Switch } from 'react-router-dom'
import { Route } from 'react-router'

ReactDOM.render(<BrowserRouter><Switch>
            <Route exact path="/">
                <App />
            </Route>
            <Route path={"/details/:id"} component={DetailScreen} />
        </Switch></BrowserRouter>, document.getElementById('root'));