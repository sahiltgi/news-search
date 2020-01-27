import React, { Component } from "react";
import "./style.css";
import { news_country, news_categories, update_data } from "../Actions/actions";
import store from "../../store";

class Selection extends Component {
  handleClick = () => {
    const { name, type } = this.props;
    if (type === "News Categories") {
      store.dispatch(news_categories(name));
      // updateData();
    } else if (type === "Countries") {
      store.dispatch(news_country(name));
      // updateData();
    }
    const val = store.getState();
    console.log(val);
    const { category, country } = val;
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=30789d4b6348465eb88925263fbe43c6`
    )
      .then(response => response.json())
      .then(res => {
        console.log(res);
        const newsarray = res.articles;
        console.log(newsarray);
        // this.setState({ data: res.articles });
        store.dispatch(update_data(newsarray));
        console.log("after update", store.getState()); // checking for store
      });
    console.log(store.getState()); // checking for store
  };

  render() {
    return (
      <div
        className="selection"
        type={this.props.type}
        onClick={this.handleClick}
      >
        {this.props.name}
      </div>
    );
  }
}

export default Selection;
