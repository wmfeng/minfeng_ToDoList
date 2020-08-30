import React, { Component } from 'react';
import {connect} from 'react-redux'

class ToDoList extends Component {
    render(){
        return (
            <div>
                <div>
                    <input value={this.props.inputValue} />
                    <button>提交</button>
                </div>
                <ul>
                    <li>11</li>
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        inputValue: state.inputValue
    }
}

export default connect(mapStateToProps,null)(ToDoList);