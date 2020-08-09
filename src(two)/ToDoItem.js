import React, { Component } from "react";
import PropTypes from "prop-types";


class ToDoItem extends Component {
    constructor(props) {
        super(props);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }
    handleDeleteClick() {
        const { deleteItem, index } = this.props;
        deleteItem(index)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        const { content, test } = this.props;
        // 虚拟DOM：JSX -> createElement -> 虚拟DOM(js对象) -> 真实的DOM
        // return React.createElement("div",{},"content")  //return <div>content</div>  第一参：元素；第二参：属性；第三参：内容
        // return React.createElement("div",{},React.createElement("span",{},"content"))  //return <div><span>content</span></div>
        return (
            <div onClick={this.handleDeleteClick}>
                {content}
            </div>
        )
    }

}

ToDoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    index: PropTypes.number,
    deleteItem: PropTypes.func
}

ToDoItem.defaultProps = {
    test: "hello world"
}

export default ToDoItem;