import React, { Component } from "react";

class EventDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 111,
            list: [
                {
                    id: 1,
                    name: "老大",
                    title: "标题1"
                },
                {
                    id: 2,
                    name: "老二",
                    title: "标题2"
                },
                {
                    id: 3,
                    name: "老三",
                    title: "标题3"
                }
            ]
        }
        // 修改方法的this指向
        this.handleClick1 = this.handleClick1.bind(this);
    }
    render() {
        return (
            <div>

                {/* 第一种：普通方法 */}
                {/* <p onClick={this.handleClick1}>
                    {this.state.name}
                </p> */}

                {/* 第二种：静态方法 */}
                {/* <p onClick={this.handleClick2}>
                    {this.state.name}
                </p> */}

                {/* event */}
                <a href="www.baidu.com" onClick={this.handleClick3}>点我啊</a>

                {/* 传递参数 用bind(this,a,b) */}
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return <li onClick={this.handleClick4(this,item.id,item.title)} key={item.id}>index:{index}<br />name:{item.name}<br />title:{item.title}</li>
                        })
                    }
                </ul>
            </div>

        )
    }
    // 第一种：普通方法
    handleClick1() {
        /*
        若this.handleClick1.bind(this)不绑定bind，此时this为undefined;将此方法写在constructor函数中，
        写法更好，只需要执行一次，若绑定在事件中每次点击都会执行
        */
        this.setState({
            name: 222
        })
    };
    // 第二种：静态方法，this指向当前实例(无需绑定bind改变this指向)
    handleClick2 = () => {
        this.setState({
            name: "静态方法"
        })
    };
    // 获取event
    handleClick3 = (event) => {
        event.preventDefault(); //阻止默认行为
        event.stopPropagation(); //阻止默认事件
        console.log("target", event.target); //指向当前元素，即当前元素触发
        console.log("currentTarget", event.currentTarget); //指向当前元素，假象！！！

        /*
            注意：event其实是react封装的，可以看到__proto__.constructor 是 SyntheticEvent 组合事件 （SyntheticBaseEvent）
        */
        console.log("event", event); //不是原生的event  原生的是 MouseEvent

        // 原生event如下。其__proto__.constructor 是 MouseEvent
        console.log("nativeEvent", event.nativeEvent);
        console.log("nativeEvent target", event.nativeEvent.target); //指向当前元素，即当前元素触发
        console.log("nativeEvent current", event.nativeEvent.currentTarget); //指向document !!!

        /*
        要点!!!：
            1.event是SyntheticEvent(组合事件)， 是react自身模拟出来的 DOM 事件，它具有事件所有的能力
            2.event.nativeEvent是原生事件对象
            3.所有的事件都被挂载到 document 上
            4.和DOM事件不一样，和vue事件也不一样
        */
    };

    // 传递参数 
    handleClick4 = (id,title,event)=>{ //最后追加一个参数，即可接受event
        console.log(id,title);
        console.log("event", event);
    }


}

export default EventDemo;