import React, { Component, Fragment } from 'react';
import ToDoItem from "./ToDoItem"

import "./style.css"

/*
  第一种写法
*/
// function App() {
//   return (
//     <div>
//       hello React
//     </div>
//   );
// }

/*
  第二种写法（老版本）
*/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ""
    })
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
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
      list
    })
  }

  getToDoItems() {
    return (
      this.state.list.map((item, index) => {
        // return <li onClick={this.handleDeleteItemClick.bind(this,index)} key={index}>{item}</li> //分离组件前
        return <ToDoItem deleteItem={this.handleDeleteClick} key={index} index={index} content={item} />  //分离组件后删除方法
      })
    )
  }

  render() {
    const { inputValue } = this.state;
    return (
      //使用Fragment不会生成dom元素（替代最外层需要包裹div元素）
      <Fragment>
        <div>
          <input value={inputValue} onChange={this.handleInputChange} />
          <button className="btn" onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>
          {this.getToDoItems()}
        </ul>
      </Fragment>
    )
  }
}

export default App;
/*
知识点：
  1.函数后绑定bind改变this指向
    this.handleBtnClick.bind(this)
*/