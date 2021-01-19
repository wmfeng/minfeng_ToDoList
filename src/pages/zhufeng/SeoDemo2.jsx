import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash"

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  render() {
    const { title } = this.state;
    return (
      <div>
        <label>请输入内容</label>
        <input value={title} onChange={this.onTitleChange} />
        <button onClick={this.onSubmit}>add</button>
      </div>
    );
  }
  onTitleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  onSubmit = () => {
    const { submitTitle } = this.props;
    const { title } = this.state;
    submitTitle(title);
    this.setState({
      title: "",
    });
  };
}

// props类型检查（报错）
// Input.PropTypes = {
//     title: PropTypes.func.isRequired
// }

class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { list } = this.props;
    return (
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item.title}</li>;
        })}
      </ul>
    );
  }

  //增加 shouleComponentUpdate
  shouldComponentUpdate(nextProps, nextState) {
    const { list } = this.props;
    //   _.isEqual 做对象或者数组的深度比较（比较耗费性能，一次性递归，不建议用词方法）
    if (_.isEqual(nextProps.list, list)) {
      return false; //相等，则不重复渲染
    }
    return true; // 不相等，则渲染
  }
}

// props类型检查
// List.PropTypes = {
//     list: PropTypes.arrayOf(PropTypes.object).isRequired
// }

class SeoDemo2 extends Component {
  constructor(props) {
    super(props);
    // 状态(数据)提升
    this.state = {
      list: [
        {
          id: 1,
          title: "标题一",
        },
        {
          id: 2,
          title: "标题二",
        },
        {
          id: 3,
          title: "标题三",
        },
      ],
    };
  }

  render() {
    const { list } = this.state;
    return (
      <div>
        <Input submitTitle={this.onSubmitTitle} />
        <List list={list} />
      </div>
    );
  }
  onSubmitTitle = (title) => {
    const { list } = this.state;
    this.setState({
      list: list.concat({
        id: `${Date.now()}`,
        title,
      }),
    });
  };
}

export default SeoDemo2;
