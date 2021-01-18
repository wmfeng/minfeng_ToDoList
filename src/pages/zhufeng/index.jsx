import React, { Component } from "react";

//class组件
// class List extends Component{
//     constructor(props){
//         super(props)
//     }

//     render(){
//         const {list} = this.props;
//         return (
//             <ul>
//                 {
//                     list.map((item,index)=>{
//                         return <li key={item.id}>{item.title}</li>
//                     })
//                 }
//             </ul>
//         )
//     }
// }

//函数组件
function List(props) {
    const { list } = props;
    return (
        <ul>
            {
                list.map((item, index) => {
                    return <li key={item.id}>{item.title}</li>
                })
            }
        </ul>
    )
}


export default List;