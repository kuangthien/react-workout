import React, { Component } from 'react';
import ArticleList from '../components/ArticleList';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="home-landing">
                    <div className="position-relative overflow-hidden p-3 p-md-5 m-xl-3 text-center bg-dark">
                        <div
                            className="position-absolute img "
                            style={{
                                backgroundImage: `url(https://picsum.photos/2000/700/)`
                            }}
                        />
                        <div className="position-relative text-light">
                            <div className="col-md-5 p-lg-5 mx-auto my-5">
                                <h1 className="display-4 font-weight-normal">
                                    Punny headline
                                </h1>
                                <p className="lead font-weight-normal">
                                    And an even wittier subheading to boot.
                                    Jumpstart your marketing efforts with this
                                    example based on Apple's marketing pages.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
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
