import React, { Component } from 'react';
import { Input, Button, List } from 'antd';

//无状态组件
const ToDoListUI = (props)=>{
    return (
        <div style={{ padding: '10px' }}>
                <div>
                    <Input onChange={props.handleInputChange} value={props.inputValue} style={{ width: '300px', marginRight: '10px' }} placeholder="todo info" />
                    <Button onClick={props.handleBtnClick} type="primary">提交</Button>
                </div>
                <List
                    style={{ width: '300px', marginTop: '10px' }}
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (
                        <List.Item onClick={(index) => { props.handleDeleteClick(index) }}>
                            {item}
                        </List.Item>
                    )}
                />
            </div >
    )
}


// class ToDoListUI extends Component {
//     render() {
//         return (
//             <div style={{ padding: '10px' }}>
//                 <div>
//                     <Input onChange={this.props.handleInputChange} value={this.props.inputValue} style={{ width: '300px', marginRight: '10px' }} placeholder="todo info" />
//                     <Button onClick={this.props.handleBtnClick} type="primary">提交</Button>
//                 </div>
//                 <List
//                     style={{ width: '300px', marginTop: '10px' }}
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item, index) => (
//                         <List.Item onClick={(index) => { this.props.handleDeleteClick(index) }}>
//                             {item}
//                         </List.Item>
//                     )}
//                 />
//             </div >
//         )
//     }
// }

export default ToDoListUI;