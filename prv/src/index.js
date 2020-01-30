import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./style.css"
import { BrowserRouter as Router,Route, Link } from "react-router-dom";


ReactDOM.render(
    <Router>
        <Route path="/" component={App} />
    </Router>, 
document.getElementById('root'));