import React, { Component } from "react";
import {
  HeaderWrapper,
  HeaderContent,
  Logo,
  Nav,
  NavLeft,
  SearchWrapper,
  NavRight,
  NavItem,
  LoginAndWrite,
  Button
} from "./style.js";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <HeaderContent>
          <Logo />
          <Nav>
            <NavLeft>
              <NavItem>首页</NavItem>
              <NavItem>下载App</NavItem>
              <SearchWrapper>

              </SearchWrapper>
            </NavLeft>
            <NavRight>
              <NavItem>Aa</NavItem>
              <NavItem>登录</NavItem>
            </NavRight>
          </Nav>
          <LoginAndWrite>
            <Button className="reg">注册</Button>
            <Button className="writting">写文章</Button>
          </LoginAndWrite>
        </HeaderContent>
      </HeaderWrapper>
    );
  }
}

export default Header;
