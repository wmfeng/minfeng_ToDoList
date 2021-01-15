import React, { Component, Fragment } from "react";
import ToDoItem from "./components/ToDoItem";

class ToDoListOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: [],
    };
  }

  handleChangeInput = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleAddClick = () => {
    const { list, inputValue } = this.state;
    this.setState({
      list: [...list, inputValue],
      inputValue: "",
    });
  };

  handleDeleteItemChild = (index)=>{
    console.log(111,index)
  }

  handleDeleteItem = (index) => {
    const { list } = this.state;
    let list2 = [...list];
    list2.splice(index, 1);
    this.setState({
      list: list2,
    });
  };
  

  render() {
    const { inputValue, list } = this.state;
    return (
      <Fragment>
        <div style={{ marginTop: "20px" }}>
          <label>请输入内容</label>
          <input value={inputValue} onChange={this.handleChangeInput} />
          <button onClick={this.handleAddClick}>add</button>
        </div>
        <ul>
          <ToDoItem content={list} deleteItem={()=>this.handleDeleteItemChild} />

          {/* 组件分离前 */}
          {/* {list.map((item, index) => {
            return (
              <li key={index} onClick={() => this.handleDeleteItem(index)}>
                {item}
              </li>
            );
          })} */}
        </ul>
      </Fragment>
    );
  }
}

export default ToDoListOne;
