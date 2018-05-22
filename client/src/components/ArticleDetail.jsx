import React from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchArticleList } from '../data/actions/articleActions';

@connect(store => ({
  article: store.article.article,
}))
export default class ArticleDetail extends React.Component {

  componentWillMount() {
    //this.props.dispatch(fetchArticleList())
  }


  render() {
    if(this.props.article) {
      return (
        <div>
          <h3>{this.props.article.title}</h3>
          <div>
            <p>{this.props.article.text}</p>
          </div>
          <div>
            <a href={this.props.article.link}
              >
              {this.props.article.link}
            </a>
          </div>

        </div>
      )
    }
    return <div/>;
  }
}
