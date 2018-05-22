import React from 'react';
import { connect } from 'react-redux';

import ListComp from './ListComp'

// Actions
import { fetchArticleList} from '../data/actions/articleActions';

@connect(store => ({
  articleList: store.articleList.articleList,
}))
export default class ArticleList extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchArticleList())
  }

  renderArticles(){
    if(this.props.articleList) {
      return this.props.articleList.map((article)=>{
        return (
          <ListComp
            key={article.id}
            article={article}
          />
        )
      })
    }
    return <div/>;
  }


  render() {

    return (
      <div>
        {this.renderArticles()}
      </div>
    );
  }
}
