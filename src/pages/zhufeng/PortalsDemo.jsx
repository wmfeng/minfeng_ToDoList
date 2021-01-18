import React, { Children, Component } from "react";
import ReactDOM from "react-dom";
import "./style.css";
/* 
Portals:
组件默认会按照既定层次嵌套渲染
如何让组件渲染到父组件以外

使用场景：
父组件：overflow:hidden;
父组件z-index值太小
fixed需要放在body的第一层级
*/
class PortalsDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        // // 正常渲染
        // return(
        //     <div className="modal">
        //         modal
        //     </div>
        // )

        // 使用Portals渲染到 body 上
        // position：fixed 元素要放在 body 上，有更好到浏览器兼容性
        return ReactDOM.createPortal(
            <div className="modal">
                modal
            </div>, document.body
        )
    }

}

export default PortalsDemo;