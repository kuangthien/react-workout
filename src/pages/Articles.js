import React, { Component } from 'react';
import ArticleList from '../components/ArticleList';

class Articles extends Component {
    state = {
        sortBy: null
    };
    handleSelectChange = e => {
        const v = e.target.value;
        this.setState({
            sortBy: v
        });
    };
    render() {
        const { sortBy } = this.state;
        return (
            <div className="">
                <div className=" container-fluid text-center ">
                    <label>
                        <select onChange={this.handleSelectChange} className="form-control form-control-lg">
                            <option disabled="disabled">Sort by</option>
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                        </select>
                    </label>
                </div>

                <ArticleList sortBy={sortBy} />
            </div>
        );
    }
}

export default Articles;
