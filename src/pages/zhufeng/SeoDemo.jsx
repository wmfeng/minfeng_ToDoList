import React, { Component } from "react";



class SeoDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    // SCU基本用法
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.count !== this.state.count) {
            return true //可以渲染
        }
        return false //不可以渲染 
    }

    render() {
        return (
            <div>SeoDemo</div>
        )
    }
}
export default SeoDemo;