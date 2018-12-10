import React, { Component } from 'react';
import moment from 'moment';

import articleList from './../data/article-list.json';

import { withRouter } from 'react-router-dom';

const Article = props => {
    const { article } = props;
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
                        {new moment(
                            article.publishDate,
                            'YYYY-MM-DDTHH:mm Z'
                        ).format('MMM DD')}
                    </small>
                </div>
                <a className="link" href="#">&nbsp;</a>
            </div>
        </div>
    );
};

class ArticleList extends Component {
    DATA = Array.from(articleList).slice(0, this.props.limit || 20);

    render() {
        return (
            <div className="articleList my-4">
                <div className="container">
                    <div className="row">
                        {this.DATA.map((v, i) => {
                            return (
                                <React.Fragment key={v._id}>
                                    <div className="col-md-3">
                                        {<Article article={v} />}
                                    </div>
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ArticleList);
