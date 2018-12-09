import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/Home" component={Home} />
            </Router>
        );
    }
}

export default App;
