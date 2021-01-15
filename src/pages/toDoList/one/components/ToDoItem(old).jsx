import React, { Component } from "react";
import PropTypes from "prop-types";

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }
  handleDeleteClick() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }
  render() {
    const { content, test } = this.props;
    // 虚拟DOM：JSX -> createElement -> 虚拟DOM(js对象) -> 真实的DOM
    // return React.createElement("div",{},"content")  //return <div>content</div>  第一参：元素；第二参：属性；第三参：内容
    // return React.createElement("div",{},React.createElement("span",{},"content"))  //return <div><span>content</span></div>
    return (
      <div onClick={this.handleDeleteClick}>
        {test}-{content}
      </div>
    );
  }

  // 一个组件要从父组件接收参数
  //如果这个组件第一次存在于父组件中，不会执行
  //如果这个组件之前已经存在于父组件中，才会执行
  componentWillReceiveProps() {
    console.log("child componentWillReceiveProps");
  }

  // 当这个组件即将被从页面剔除的时候，会被执行
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}

ToDoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  index: PropTypes.number,
  deleteItem: PropTypes.func,
};

ToDoItem.defaultProps = {
  test: "hello world",
};

export default ToDoItem;
