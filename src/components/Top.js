import React, { Component } from 'react';

export default class Top extends Component {
    render() {
        return (
            <div className="top-container __sticky-top text-light bg-dark">
                <div className="container">
                    <div className="d-flex flex-column py-5">
                        <h1 className="text-logo text-center">React Workout</h1>
                        <nav className="my-2 my-md-0 mr-md-3 text-center">
                            <a className="p-2 text-light" href="/">
                                Home
                            </a>
                            <a className="p-2 text-light" href="/articles">
                                Articles
                            </a>
                            <a className="p-2 text-light" href="/about-us">
                                About us
                            </a>
                            <a className="p-2 text-light" href="/contact-us">
                                Contact us
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}
