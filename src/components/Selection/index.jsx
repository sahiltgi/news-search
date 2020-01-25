import React, { Component } from "react";

class Selection extends Component {
  state = {};
  render() {
    return <div className="selection">{this.props.name}</div>;
  }
}

export default Selection;
