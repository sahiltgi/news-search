import React, { Component } from "react";
import Menu from "../Menu";
import { NEWS_CATEGORIES, NEWS_LANGUAGES, NEWS_COUNTRY } from "../constant";
import "./style.css";

class MenuBar extends Component {
  state = {};
  render() {
    return (
      <div className="SideMenu">
        <Menu listItem={NEWS_COUNTRY} listName={"Country Name"} />
        <Menu listItem={NEWS_CATEGORIES} listName={"News Categories"} />
        <Menu listItem={NEWS_LANGUAGES} listName={"News Languages"} />
      </div>
    );
  }
}

export default MenuBar;
