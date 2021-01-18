/* 
 异步组件：
    import()
    React.lazy
    React.Suspense
*/
import React ,{Component} from "react";

const ContextDemo = React.lazy(()=>import('./ContextDemo'))

class LazyDemo extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <div>
                <p>引入一个动态组件</p>
                <hr/>
                <React.Suspense fallback={<div style={{color: "red"}}>Loadine...</div>}>
                    <ContextDemo />
                </React.Suspense>
            </div>
            /* 
                1.强制刷新 可看到 loading （看不到可限制一下 Chrome 网速）
                2.看 network 到 js 加载
            */
        )
    }
}

export default LazyDemo;