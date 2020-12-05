import React, { useState, useEffect, Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'antd/dist/antd.css';
import "./App.css";

import IntroComponent from './components/IntroComponent.js';


// import moment from "moment";

function App() {

  return (
    <div>
    <Switch>
    <Route exact path="/">
        <IntroComponent/>
      </Route>
    </Switch>
  </div>
  );
}

// what is this?
class AppRoutes extends Component {
  render() {
    return (
      <Router>
        <Switch>        
          <Route path='/:page'>
            <App />
          </Route>
          <Route exact path='/'>
            <App />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default AppRoutes;
