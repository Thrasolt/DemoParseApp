import React from 'react';
import ArticleList from './ArticleList.jsx'
import InputField from './InputField.jsx'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <div>
        <InputField />
        <ArticleList />
      </div>
    );
  }
}
