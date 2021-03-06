import React, { Component } from 'react';
// for hot reload
import './assets/sass/App.scss';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Top from './components/Top';
import HomeLanding from './components/HomeLanding';

import Footer from './components/Footer';
import ArticleDetail from './pages/ArticleDetail';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Articles from './pages/Articles';

class App extends Component {
    render() {
        return (
            <div>
                <Top />
                <Route path="/" exact component={HomeLanding} />
                <div className="my-4">
                    <Route path="/" exact component={Home} />
                    <Route path="/article/:id" component={ArticleDetail} />
                    <Route path="/articles" component={Articles} />
                    <Route path="/about-us" component={AboutUs} />
                    <Route path="/contact-us" component={ContactUs} />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
