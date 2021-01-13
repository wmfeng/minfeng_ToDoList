import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store";
import {
  HeaderWrapper,
  HeaderContent,
  Logo,
  Nav,
  NavLeft,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoWrapper,
  SearchInfoItem,
  NavRight,
  NavItem,
  LoginAndWrite,
  Button,
} from "./style.js";

class Header extends Component {
  getsearchInfoTitList() {
    const {
      focused,
      handleMouseEnter,
      handleMouseLeave,
      mouseEnter,
      searchInfoTitList,
      handleChangePage,
      pageNo,
      totalPage,
    } = this.props;
    const newSearchInfoTitList = searchInfoTitList.toJS();
    const pageList = [];
    if (newSearchInfoTitList.length) {
      for (let i = (pageNo - 1) * 10; i < pageNo * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newSearchInfoTitList[i]}>
            {newSearchInfoTitList[i]}
          </SearchInfoItem>
        );
      }
    }
    if (focused || mouseEnter) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => handleChangePage(pageNo, totalPage, this.spinIcon)}
            >
              <i
                ref={(icon) => {
                  this.spinIcon = icon;
                }}
                className="iconfont spin"
              >
                &#xe71e;
              </i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoWrapper>
            {pageList}
          </SearchInfoWrapper>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }

  letsGo(val) {
    this.props.history.push(val, { age: 111, sex: 1 });
    // this.props.history.push(item.route, { age: 13, name: 'zhangsan' })
    // 另外也可以通过location.href search进行传参 this.props.history.push(item.route + '?age=13&name=zhangsan')
  }

  render() {
    const {
      handleInputFocus,
      handleInputBlur,
      focused,
      searchInfoTitList,
    } = this.props;
    return (
      <HeaderWrapper>
        <HeaderContent>
          <Logo />
          <Nav>
            <NavLeft>
              <NavItem onClick={() => this.letsGo("/")} className="actived">
                <i className="iconfont">&#xe60c;</i>首页
              </NavItem>
              <NavItem onClick={() => this.letsGo("/download")}>
                <i className="iconfont">&#xe60d;</i>下载App
              </NavItem>
              <SearchWrapper>
                <CSSTransition in={focused} timeout={500} classNames="slide">
                  <NavSearch
                    onFocus={() => handleInputFocus(searchInfoTitList)}
                    onBlur={() => handleInputBlur()}
                    className={focused ? "focused" : ""}
                  ></NavSearch>
                </CSSTransition>
                <i
                  className={
                    focused ? "iconfont zoom focused" : "iconfont zoom"
                  }
                >
                  &#xe6d1;
                </i>
                {this.getsearchInfoTitList()}
              </SearchWrapper>
            </NavLeft>
            <NavRight>
              <NavItem>
                <i className="iconfont">&#xe636;</i>
              </NavItem>
              <NavItem onClick={() => this.letsGo("/login")}>登录</NavItem>
            </NavRight>
          </Nav>
          <LoginAndWrite>
            <Button className="reg">注册</Button>
            <Button onClick={() => this.letsGo("/write")} className="writting">
              写文章
            </Button>
          </LoginAndWrite>
        </HeaderContent>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(["header", "focused"]),
    mouseEnter: state.getIn(["header", "mouseEnter"]),
    searchInfoTitList: state.getIn(["header", "searchInfoTitList"]),
    pageNo: state.getIn(["header", "pageNo"]),
    totalPage: state.getIn(["header", "totalPage"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(searchInfoTitList) {
      searchInfoTitList.size === 0 &&
        dispatch(actionCreators.getSearchInfoList());
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
    handleChangePage(pageNo, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/gi, "");
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = "rotate(" + (originAngle + 360) + "deg)";
      if (pageNo < totalPage) {
        dispatch(actionCreators.changePage(pageNo + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
