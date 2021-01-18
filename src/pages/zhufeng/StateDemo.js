import React, { Component } from "react";

class StateDemo extends Component {
    constructor(props) {
        super(props);
        //第一.在构造函数中定义
        this.state = {
            test: 0,
            list1: [1, 2, 3, 4],
            list2: [1, 2, 3, 4],
            list3: [1, 2, 3, 4],
            list4: [1, 2, 3, 4],
            list5: [1, 2, 3, 4],
            obj1: {
                b: "b",
                c: "c"
            },
            obj2: {
                b: "b",
                c: "c"
            }
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClickAdd}></button>
                {this.state.test}
            </div>
        )
    }

    handleClickAdd = () => {
        //第二，不要直接修改 state ，使用不可变值
        this.setState({
            test: this.state.test + 1
        })

        // 第三：setState 可能是异步更新 （有可能是同步更新）

        // 自己定义对 DOM 事件, setState 是同步对  在 componentDidMount 中 是异步对

        // 第四： state 异步更新对话，更新前会被合并
    }


    handleSetState = () => {
        // 不可变值（函数式编程，纯函数） ----数组
        // 注意：不能直接对 this.state.list 进行 push pop splice 等，这样违反不可变值
        const list5Copy = this.state.list5.slice();
        list5Copy.splice(2, 0, 'a') //中间插入/删除
        this.setState({
            list1: this.state.list1.concat(100), //追加
            list2: [this.state.list2, 100], //追加
            list3: this.state.list3.slice(0, 2), //截取
            list4: this.state.list4.filter(item => item > 100),//筛选
            list5: list5Copy //其他操作
        })


        //不可变值 ----对象
        // 注意：不能直接对 this.state.obj 进行属性设置，这样违反不可变值
        this.setState({
            obj1: Object.assign({}, this.state.obj1, { a: 12 }),
            obj2: { ...this.state.obj2, a: 213 }
        })
    }
}
export default StateDemo;