import React from 'react';
import { Input, Button, List } from 'antd';

//无状态组件
const ToDoListUI = (props) => {
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
                    <List.Item onClick={() => { props.handleDeleteClick(index) }}>
                        {item}
                    </List.Item>
                )}
            />
        </div >
    )
}

export default ToDoListUI;