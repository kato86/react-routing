import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <Router>
        <Route component={Main} path="app">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Route>
      </Router>
    );    
  }
}

export default App;
