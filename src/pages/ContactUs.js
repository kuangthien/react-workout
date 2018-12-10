import React, { Component } from 'react';

export default class AboutUs extends Component {
    render() {
        return (
            <div className="container">
                <h1> Contact Us </h1>
                <div className="row">
                    <div className="col-sm-6  ">
                        {' '}
                        <div className="content">
                            <div class="form-group">
                                <label for="firstName">Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="firstName"
                                    placeholder=""
                                    required=""
                                />
                            </div>
                            <div class="form-group">
                                <label for="lastName">Message</label>
                                <textarea
                                    type="text"
                                    class="form-control"
                                    id="lastName"
                                    placeholder=""
                                    required=""
                                />
                            </div>

                            <button className="btn btn-primary mb-4">Done</button>
                        </div>
                    </div>
                    <div className="col-sm-6  ">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0755652759503!2d106.74944551428723!3d10.80552446161185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175266bafd85e9b%3A0x7beb43f2397cb548!2sThe+Vista+An+Phu!5e0!3m2!1sen!2s!4v1540612364472"
                            width="100%"
                            height="100%"
                            frameborder="0"
                            allowfullscreen=""
                        />
                    </div>
                </div>
            </div>
        );
    }
}
