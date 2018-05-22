import React from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchArticleList } from '../data/actions/articleActions';

@connect(store => ({
  articleList: store.articleList.articleList,
}))
export default class ArticleList extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchArticleList())
  }

  renderArticles(){
    return this.props.articleList.map((article)=>{
      return (
        <div key={article.id}>
          {article.title}
        </div>
      )
    })
  }


  render() {

    return (
      <div>
        {this.renderArticles()}
      </div>
    );
  }
}
