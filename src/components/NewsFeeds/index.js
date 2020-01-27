import React, { Component } from "react";
import News from "../News";
import "./style.css";
import store from "../../store";

class NewsFeeds extends Component {
  state = {
    data: []
  };

  updatelocalState = () => {
    const newdata = store.getState();
    console.log("new data ", newdata.feeds);
    this.setState({ data: newdata.feeds });
  };

  render() {
    return (
      <div className="container">
        <button onClick={this.updatelocalState}>Load news</button>
        <div className="news-feeds">
          {this.state.data != null
            ? this.state.data.map(feed => <News data={feed} />)
            : null}
        </div>
      </div>
    );
  }
}

export default NewsFeeds;
