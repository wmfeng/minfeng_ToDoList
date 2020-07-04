import React, { Component } from "react"

class ToDoItem extends Component {
    constructor(props) {
        super(props);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }
    handleDeleteClick() {
        const { deleteItem, index } = this.props;
        deleteItem(index)
    }
    render() {
        const { content } = this.props;
        return (
            <div onClick={this.handleDeleteClick}>
                {content}
            </div>
        )
    }
}

export default ToDoItem;