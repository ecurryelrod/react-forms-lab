import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {message: ''};
  }

  handleMessage = e => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    let characters = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" 
        onChange={this.handleMessage}
        value={this.state.message}/>
        <p>{characters}/280 characters remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
