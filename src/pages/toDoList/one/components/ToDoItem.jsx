import React, { Component } from "react";

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "",
    };
  }

  render() {
    const { content, deleteItem } = this.props;
    return (
      <div>
        {content.map((item, index) => {
          return <li onClick={deleteItem(index)} key={index}>{item}</li>;
        })}
      </div>
    );
  }
}

export default ToDoItem;
