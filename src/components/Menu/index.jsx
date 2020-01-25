import React, { Component } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Selection from "../Selection";

class Menu extends Component {
  state = {
    clicked: false
  };

  toggleListItem() {
    const currentState = this.state.clicked;
    this.setState({ clicked: !currentState });
  }

  render() {
    const { listName, listItem } = this.props;
    const { clicked } = this.state;
    return (
      <div className="MenuBtn">
        <div
          className="menu-title"
          onClick={() => this.toggleListItem()}
          id={listName}
        >
          {listName} {clicked ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {clicked ? listItem.map(item => <Selection name={item} />) : null}
      </div>
    );
  }
}

export default Menu;
