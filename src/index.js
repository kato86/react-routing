import React, { Componet } from 'react';
import { render } from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './About';
import Home from './App';

render(
    <Router>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
    </Router>,
    document.getElementById('root')
);