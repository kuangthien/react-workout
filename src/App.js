import React, { Component } from 'react';
// for hot reload
import './assets/sass/App.scss';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Top from './components/Top';
import Footer from './components/Footer';
import ArticleDetail from './pages/ArticleDetail';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

class App extends Component {
    render() {
        return (
            <div>
                <Top />
                <div className="my-4">
                    <Route path="/" exact component={Home} />
                    <Route path="/article/:id" component={ArticleDetail} />
                    <Route path="/about-us" component={AboutUs} />
                    <Route path="/contact-us" component={ContactUs} />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
