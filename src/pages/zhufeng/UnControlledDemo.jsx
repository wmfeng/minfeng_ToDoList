import React, { Component } from "react";
//7-14
class UnControlledDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "老王",
            flag: true
        }
        this.nameInputRef = React.createRef() //创建ref
        this.fileInputRef = React.createRef()
    }

    render() {
        // input defaultValue
        // return (
        //     <div>
        //         {/* 使用 defaultValue 而不是 value , 使用 ref */}
        //         <input defaultValue={this.state.name} ref={this.nameInputRef} />
        //         {/* state 并不会随着改变 */}
        //         <span>state.name{this.state.name}</span>
        //         <br />
        //         <button onClick={this.handleClickValue}>打印</button>
        //     </div>
        // )

        //checkbox defaultChecked
        // return (
        //     <div>
        //         <input type="checkbox" defaultChecked={this.state.flag}/>
        //         state.flag:{this.state.flag}
        //     </div>
        // )

        //file
        return (
            <div>
                <input type="file" ref={this.fileInputRef}/>
                <button onClick={this.handleFileValue}>打印file</button>
            </div>
        )
    }

    handleClickValue = () => {
        const eleValue = this.nameInputRef.current;  //通过  ref 获取 DOM 节点
        console.log("state.name", eleValue.value); //不是this.state.name的值
    }

    handleFileValue =()=>{
        const eleFile = this.fileInputRef.current;//通过  ref 获取 DOM 节点
        console.log(eleFile.files[0].name)
    }
}
export default UnControlledDemo;