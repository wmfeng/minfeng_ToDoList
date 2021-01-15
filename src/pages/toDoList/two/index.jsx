import React, { Component, Fragment } from "react";
import axios from "axios";
import ToDoItem from "./components/ToDoItem";
import Test from "./components/Test";
import Transition from "./components/Transition";

import "./style.css";

/*
  第一种写法
*/
// function ToDoList() {
//   return (
//     <div>
//       hello React
//     </div>
//   );
// }

/*
  第二种写法（老版本）
*/
class ToDoList extends Component {
  constructor(props) {
    super(props);
    // 当组件的state或者props发生改变的时候，render函数就会被重新执行
    this.state = {
      list: [],
      inputValue: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleBtnClick() {
    // setState是一个异步函数
    this.setState(
      {
        list: [...this.state.list, this.state.inputValue],
        inputValue: "",
      },
      () => {}
    );
  }

  handleInputChange(e) {
    const value = e.target.value;
    this.setState({
      inputValue: value,
    });
  }

  //分离组件前删除方法
  // handleDeleteItemClick(index) {
  //   const list = [...this.state.list];
  //   list.splice(index, 1);
  //   this.setState({
  //     list
  //   })
  // }

  //分离组件后删除方法
  handleDeleteClick(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list,
    });
  }

  componentDidMount() {
    axios
      .get(
        "https://www.easy-mock.com/mock/5f13c4e594896b22a7fa7651/api/api/todolist"
      )
      .then((res) => {
        this.setState(() => ({
          list: [...res.data],
        }));
      })
      .catch((err) => {
        console.log(err)
      });
  }

  getToDoItems() {
    return this.state.list.map((item, index) => {
      // return <li onClick={this.handleDeleteItemClick.bind(this,index)} key={index}>{item}</li> //分离组件前
      return (
        <ToDoItem
          deleteItem={this.handleDeleteClick}
          key={index}
          index={index}
          content={item}
        />
      ); //分离组件后删除方法
    });
  }

  render() {
    const { inputValue } = this.state;
    return (
      //使用Fragment不会生成dom元素（替代最外层需要包裹div元素）
      <Fragment>
        <div>
          <label htmlFor="insertArea">请输入内容</label>
          <input
            id="insertArea"
            value={inputValue}
            onChange={this.handleInputChange}
          />
          <button className="btn" onClick={this.handleBtnClick}>
            add
          </button>
        </div>
        <ul>{this.getToDoItems()}</ul>
        <Test content={inputValue} />
        <hr  />
        <h3 style={{margin: "10px 0"}}>Transition</h3>
        <Transition />
      </Fragment>
    );
  }
}

export default ToDoList;
/*
知识点：
  1.函数后绑定bind改变this指向
    this.handleBtnClick.bind(this)
*/
