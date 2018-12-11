import React, { Component } from 'react';
import ArticleList from '../components/ArticleList';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <h2 className="text-center mt-5">Hot articles</h2>
                <ArticleList limit="8" />
                <div className="text-center">
                    <a href="/articles" className="btn btn-secondary">
                        View all articles...
                    </a>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;
