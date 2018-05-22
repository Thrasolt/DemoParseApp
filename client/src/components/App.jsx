import React from 'react';
import InputField from './InputField.jsx';
import ArticleList from './ArticleList.jsx';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <div>
        <ArticleList />
        <br></br>
        <InputField />
      </div>
    );
  }
}
