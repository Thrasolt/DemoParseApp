import React from 'react';

export default class InputField extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  changeText = (evt) =>{
    this.setState({
      text: evt.target.value,
    })
  }

  render() {

    return (
      <div>
        <h3>Input url</h3>
        <input
          type="text"
          autoFocus={true}
          onChange={this.changeText}
          value={this.state.text}
        />
      </div>
    );
  }
}
