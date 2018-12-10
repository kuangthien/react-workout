import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

import DATA from './../data/article-list.json';

const getArticleById = id =>
    Array.from(DATA).filter(v => v._id === id)[0] || {};

class ArticleDetail extends Component {
    render() {
        const { match } = this.props;
        const article = getArticleById(match.params.id);

        return (
            <div className="my-4">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="d-flex align-items-center justify-content-start   h-100">
                                <div>
                                    <h1 className="heading my-4">
                                        {article.title}
                                    </h1>
                                    <div className="meta">
                                        <p className="text-muted">
                                            {new moment(
                                                article.publishDate,
                                                'YYYY-MM-DDTHH:mm Z'
                                            ).format('MMM DD')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="img">
                                <img
                                    src={article.imageUrl}
                                    alt=""
                                    height="auto"
                                    minHeight="100%"
                                    width="100%"
                                    className="bg-dark"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="content my-4">{article.content}</div>
                </div>
            </div>
        );
    }
}

export default withRouter(ArticleDetail);
