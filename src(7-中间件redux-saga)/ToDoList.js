import React, { Component } from 'react';
import 'antd/dist/antd.css';
import ToDoListUI from './ToDoListUI'
import store from './store'
import { getInitList, getInputChangeAction, getAddTodoItem, getDeleteTodoItem } from './store/actionCreateors'


class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.state = store.getState();
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <ToDoListUI
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        inputValue={this.state.inputValue}
        handleBtnClick={this.handleBtnClick}
        handleDeleteClick={this.handleDeleteClick}
      />
    )
  }

  componentDidMount() {
    const action = getInitList();
    store.dispatch(action);
    // axios.get('https://www.easy-mock.com/mock/5f13c4e594896b22a7fa7651/api/api/todolist')
    //   .then((res) => {
    //     const data = res.data;
    //     const action = initListAction(data);
    //     store.dispatch(action);
    //   })
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleStoreChange() {
    this.setState(store.getState());
  }
  handleBtnClick() {
    const action = getAddTodoItem()
    store.dispatch(action)
  }
  handleDeleteClick(index) {
    const action = getDeleteTodoItem(index)
    store.dispatch(action)
  }
}

export default ToDoList;