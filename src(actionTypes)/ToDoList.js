import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store'
import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './store/actionTypes'

class ToDoList extends Component {
  constructor(props){
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    store.subscribe(this.handleStoreChange)
  }

  render() {
    return (
      <div style={{ padding: '10px' }}>
        <div>
          <Input onChange={this.handleInputChange} value={this.state.inputValue} style={{ width: '300px', marginRight: '10px' }} placeholder="todo info" />
          <Button onClick={this.handleBtnClick} type="primary">提交</Button>
        </div>
        <List
        style={{width:'300px',marginTop:'10px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item,index) => (
            <List.Item onClick={this.handleDeleteClick.bind(this,index)}>
               {item}
            </List.Item>
          )}
        />
      </div>
    )
  }

  handleInputChange(e){
    const action = {
      type: CHANGE_INPUT_VALUE,
      value: e.target.value
    }
    store.dispatch(action)
  }
  handleStoreChange(){
    this.setState(store.getState());
  }
  handleBtnClick(){
    const action = {
      type: ADD_TODO_ITEM
    }
    store.dispatch(action)
  }
  handleDeleteClick(index){
    const action = {
      type: DELETE_TODO_ITEM,
      index
    }
    store.dispatch(action)
  }
}

export default ToDoList;