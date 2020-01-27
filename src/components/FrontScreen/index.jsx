import React, { Component } from "react";
import Header from "../Heading";
import NewsFeeds from "../NewsFeeds";

class Screen extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <NewsFeeds />
      </div>
    );
  }
}

export default Screen;
