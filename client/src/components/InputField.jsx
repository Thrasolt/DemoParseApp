import React from 'react';
import { connect } from 'react-redux';
import axios from "axios";

// Actions
import { fetchArticleList } from '../data/actions/articleActions';

@connect(store => ({
  articleList: store.articleList.articleList,
}))
export default class InputField extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "",
      tempArticle: null,
      link: ""
    };
  }

  changeText = (evt) =>{
    this.setState({
      text: evt.target.value,
    })
  }

  crawl = () => {
    const data = {
      url: this.state.text,
    }


    //let self = this;
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/article/crawl/',
      data: data,
      headers: {
        "content-type": "application/json",
      }

    }).then(function(response) {
      this.setState({
        text: "",
        link: data.url,
        tempArticle: response.data,
      });
      console.log("response.data: ",response.data);
    }.bind(this)).catch((err) => {
      console.log(err);
    });
  }

  postArticle = () => {
    const data = {
      text: this.state.tempArticle.text,
      title: this.state.tempArticle.title,
    }


    //let self = this;
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/article/post/',
      data: data,
      headers: {
        "content-type": "application/json",
      }

    }).then(function(response) {
      this.props.dispatch(fetchArticleList());
      console.log("response.data: ",response.data);
    }.bind(this)).catch((err) => {
      console.log(err);
    });
  }

  renderTempArticle(){
    if(this.state.tempArticle){
      return (
        <div>
          <div>
            <a href={this.state.link}>{this.state.link}</a>
          </div>
          <div>
            <span>Title: {this.state.tempArticle.title}</span>
          </div>
          <div>
            <span>Text: {this.state.tempArticle.text}</span>
          </div>
          <div>
            <button onClick={this.postArticle}> post </button>
          </div>
        </div>
      )
    }
    return <div/>;
  }

  render() {

    console.log("state:", this.state);

    return (
      <div>
        <h3>Input url</h3>
        <input
          type="text"
          autoFocus={true}
          onChange={this.changeText}
          value={this.state.text}
        />
      <button
        onClick={this.crawl}
      >
        crawl
      </button>
      {this.renderTempArticle()}
      </div>
    );
  }
}
