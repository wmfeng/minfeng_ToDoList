import React, { Component } from "react";
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
    SearchInfo,
    SearchInfoWrapper,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    Addition,
    Button
} from "./style.js";

class Header extends Component {
    getListArea() {
        const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        // 此时的list是immutable类型的数据，需要使用toJS()将其转化为普通的数据类型；
        const newList = list.toJS();
        const pageList = [];
        if (newList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo>
                    <SearchInfoTitle
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >热门搜索
                                <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage,this.spinIcon)}>
                            <i ref={(icon)=>{this.spinIcon=icon}} className="iconfont spin">&#xe606;</i>
                            换一批
                                </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoWrapper>

                        {
                            pageList

                            // 添加换一批之前
                            // list.map(item => {
                            //     return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            // })
                        }
                    </SearchInfoWrapper>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }
    render() {
        const { focused, handleInputFocus, handleInputBlur } = this.props;
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
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? "focused" : ""}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? "focused iconfont zoom" : "iconfont zoom"}>&#xe61d;</i>
                        {this.getListArea()}
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
}

const mapStateToProps = (state) => {
    return {
        // focused: state.header.focused
        // 在reduser中使用了immutable库，state中的值是不可以被直接更改的，因此获取state下的值也要相应的改变
        // focused: state.header.get("focused")
        // 在src/store/reducer.js中引入redux-immutable，
        // focused: state.get("header").get("focused") //等价于
        focused: state.getIn(["header", "focused"]),
        list: state.getIn(['header', 'list']),
        page: state.getIn(["header", "page"]),
        mouseIn: state.getIn(["header", "mouseIn"]),
        totalPage: state.getIn(['header', 'totalPage'])
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage,spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle = parseInt(originAngle,10);
            }else{
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+originAngle+360+'deg)';
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1))
            } else {
                dispatch(actionCreators.changePage(1))
            }

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);