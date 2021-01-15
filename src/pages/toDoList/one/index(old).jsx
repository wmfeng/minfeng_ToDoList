import React, { Component, Fragment } from "react";
import ToDoItem from "./components/ToDoItem";
import Test from "./components/Test";

import "./style.css";

/*
  第一种写法
*/
// function ToDoListOne() {
//   return (
//     <div>
//       hello React
//     </div>
//   );
// }

/*
  第二种写法（老版本）
*/
class ToDoListOne extends Component {
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
      () => {
        console.log(this.ul.querySelectorAll("div").length);
      }
    );
  }

  handleInputChange() {
    // 由于使用了ref，可将e.target替换为this.input
    const value = this.input.value;
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

  // 组件在被挂在到页面之前，自动执行
  componentWillMount() {
    console.log("componentWillMount");
  }

  render() {
    console.log("render");
    const { inputValue } = this.state;
    return (
      //使用Fragment不会生成dom元素（替代最外层需要包裹div元素）
      <Fragment>
        <div>
          <label htmlFor="insertArea">请输入内容</label>
          <input
            ref={(input) => {
              this.input = input;
            }}
            id="insertArea"
            value={inputValue}
            onChange={this.handleInputChange}
          />
          <button className="btn" onClick={this.handleBtnClick}>
            add
          </button>
        </div>
        <ul
          ref={(ul) => {
            this.ul = ul;
          }}
        >
          {this.getToDoItems()}
        </ul>
        <Test content={inputValue} />
      </Fragment>
    );
  }

  //组件被挂载到页面之后，自动执行
  componentDidMount() {
    console.log("componentDidMount");
  }

  // 组件被更新之前，自动执行
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  // 组件被更新之前，自动执行,但是它在shouldComponentUpdate之后执行
  //如果shouldComponentUpdate返回true它才执行，返回false此函数就不会执行
  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  // 组件更新完成之后会被执行
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
}

export default ToDoListOne;
/*
知识点：
  1.函数后绑定bind改变this指向
    this.handleBtnClick.bind(this)
*/
