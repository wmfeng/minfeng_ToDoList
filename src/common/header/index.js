import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store";
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button
} from "./style.js";

//无状态组件
const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <NavItem className="right">登陆</NavItem>
                <NavItem className="right">
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch
                            className={props.focused ? "focused" : ""}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <i className={props.focused ? "focused iconfont" : "iconfont"}>&#xe61d;</i>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className="writting">
                    <i className="iconfont">&#xe615;</i>
                    写文章</Button>
                <Button className="reg">注册</Button>
            </Addition>
        </HeaderWrapper>
    );
}

// class Header extends Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         focused: false,
//     //     };;
//     //     this.handleInputFocus = this.handleInputFocus.bind(this);
//     //     this.handleInputBlur = this.handleInputBlur.bind(this);
//     // }

//     render() {
//         return (
//             <HeaderWrapper>
//                 <Logo />
//                 <Nav>
//                     <NavItem className="left active">首页</NavItem>
//                     <NavItem className="left">下载App</NavItem>
//                     <NavItem className="right">登陆</NavItem>
//                     <NavItem className="right">
//                         <i className="iconfont">&#xe636;</i>
//                     </NavItem>
//                     <SearchWrapper>
//                         <CSSTransition
//                             in={this.props.focused}
//                             timeout={200}
//                             classNames="slide"
//                         >
//                             <NavSearch
//                                 className={this.props.focused ? "focused" : ""}
//                                 onFocus={this.props.handleInputFocus}
//                                 onBlur={this.props.handleInputBlur}
//                             ></NavSearch>
//                         </CSSTransition>
//                         <i className={this.props.focused ? "focused iconfont" : "iconfont"}>&#xe61d;</i>
//                     </SearchWrapper>
//                 </Nav>
//                 <Addition>
//                     <Button className="writting">
//                         <i className="iconfont">&#xe615;</i>
//                         写文章</Button>
//                     <Button className="reg">注册</Button>
//                 </Addition>
//             </HeaderWrapper>
//         )
//     }

//     handleInputFocus() {
//         this.setState({
//             focused: true,
//         })
//     }

//     handleInputBlur() {
//         this.setState({
//             focused: false,
//         })
//     }
// };

const mapStateToProps = (state) => {
    return {
        // focused: state.header.focused
        // 在reduser中使用了immutable库，state中的值是不可以被直接更改的，因此获取state下的值也要相应的改变
        focused: state.header.get("focused")
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);