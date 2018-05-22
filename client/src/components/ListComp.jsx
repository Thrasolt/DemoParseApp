import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

// Actions
import {fetchArticle} from '../data/actions/articleActions';

@connect(store => ({
}))
export default class ListComp extends React.Component {

  fetch = () => {
    this.props.fetchArticle(this.props.article.slug);
  }


  render() {

    return (
      <div >
        <Link
          onClick={this.fetch}
          to= {'/'+this.props.article.slug}>
        {this.props.article.title}
        </Link>
      </div>
    );
  }
}
