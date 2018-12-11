import React, { Component } from 'react';
import moment from 'moment';

import articleList from './../data/article-list.json';

import { withRouter } from 'react-router-dom';

const Article = props => {
    const { article, goToDetail } = props;
    return (
        <div className="card mb-4 box-shadow border-0 article-item">
            <div className="card-img-top" alt="">
                <b
                    className="img d-block"
                    style={{
                        backgroundImage: `url(${article.imageUrl})`
                    }}
                />
            </div>

            <div className="card-body">
                <p className="card-title font-weight-bold">{article.title}</p>
                <p className="card-text">{article.desc}</p>
                <div className=" text-right">
                    <small className="text-muted">
                        {new moment(article.publishDate, 'YYYY-MM-DDTHH:mm Z').format('MMM DD YYYY')}
                    </small>
                </div>
                <a
                    href={`/article/${article._id}`}
                    onClick={e => {
                        e.preventDefault();
                        goToDetail();
                    }}
                    className="link"
                >
                    &nbsp;
                </a>
            </div>
        </div>
    );
};

class ArticleList extends Component {
    compareMoment = (a, b) => {
        const momentA = moment(a.publishDate, 'YYYY-MM-DDTHH:mm:ss Z');
        const momentB = moment(b.publishDate, 'YYYY-MM-DDTHH:mm:ss Z');
        return momentA.isAfter(momentB) ? 1 : -1;
    };

    render() {
        let displayData = [];
        const { sortBy } = this.props;

        if (sortBy) {
            displayData = Array.from(articleList).sort((a, b) => {
                let rs;
                if (sortBy === 'newest') {
                    rs = this.compareMoment(a, b);
                } else if (sortBy === 'oldest') {
                    rs = this.compareMoment(b, a);
                } else {
                    rs = 0;
                }
                return rs;
            });
        } else {
            displayData = Array.from(articleList).slice(0, this.props.limit || 20);
        }

        return (
            <div className="articleList my-4">
                <div className="container-fluid">
                    <div className="row">
                        {displayData.map((v, i) => {
                            return (
                                <div className="col-lg-3 col-md-4 col-sm-6" key={v._id}>
                                    {
                                        <Article
                                            article={v}
                                            goToDetail={() => this.props.history.push(`/article/${v._id}`)}
                                        />
                                    }
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ArticleList);
