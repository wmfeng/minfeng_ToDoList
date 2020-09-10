import React, { Component } from 'react';
import { connect } from 'react-redux'

class ToDoList extends Component {
    render() {
        const { list, inputValue, changeInputValue, handleClick, handleDeleteClick } = this.props;
        return (
            <div>
                <div>
                    <input value={inputValue} onChange={changeInputValue} />
                    <button onClick={handleClick}>提交</button>
                </div>
                <ul>
                    {
                        list.map((item, index) => {
                            return <li onClick={handleDeleteClick.bind(this,index)} key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action);
        },

        handleClick() {
            const action = {
                type: 'add_item'
            }
            dispatch(action);
        },
        handleDeleteClick(index) {
            const action = {
                type: 'delete_item',
                index
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);