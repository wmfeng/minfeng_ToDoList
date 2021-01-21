import React, { Component } from "react";
// import PropTypes from "prop-types";

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
  // constructor(props) {
  //   super(props);
  // }
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
}

// props类型检查
// List.PropTypes = {
//     list: PropTypes.arrayOf(PropTypes.object).isRequired
// }

class Footer extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { foot, length } = this.props;
    return (
      <div>
        {foot}--{length}
      </div>
    );
  }

  componentDidMount() {
    console.log("footer did update");
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.foot !== this.props.foot || nextProps.length !== this.props.length) {
      return true;
    }
    return false;
  }
  /* 
        React默认： 父组件更新， 子组件无条件更新
        性能优化对于 React 更加重要
        当需要时再使用 shouldComponentUpdate 否则 无需使用
    */
}

class PropsDemo extends Component {
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
      foot: "文档底部",
    };
  }

  render() {
    const { list, foot } = this.state;
    return (
      <div>
        <Input submitTitle={this.onSubmitTitle} />
        <List list={list} />
        <Footer foot={foot} length={list.length} />
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

export default PropsDemo;
