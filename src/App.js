import React, { Component } from 'react';
// for hot reload
import './assets/sass/App.scss';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Top from './containers/Top';
import Footer from './containers/Footer';
import ArticleDetail from './pages/ArticleDetail';

class App extends Component {
    render() {
        return (
            <div>
                <Top />
                <div className="my-4">
                    <Route path="/" exact component={Home} />
                    <Route path="/article/:id" component={ArticleDetail} />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
