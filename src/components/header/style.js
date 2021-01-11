import styled from "styled-components";
import logoImg from "../../asstes/images/log.png";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 55px;
  border-bottom: 1px solid #f0f0f0;
`;

export const HeaderContent = styled.div`
  min-width: 768px;
  max-width: 1440px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  width: 100px;
  height: 56px;
  background: url(${logoImg});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 68%;
  display: flex;
  justify-content: space-between;
`;

export const NavLeft = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SearchWrapper = styled.div`
  position: relative;
  .zoom {
    position: absolute;
    right: 5px;
    top: 12px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    color: #969696;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: "搜索",
})`
  width: 220px;
  height: 36px;
  padding: 0 30px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 300px;
  }
  &.slide-enter {
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 300px;
  }
  &.slide-exit {
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active {
    width: 220px;
  }
`;

export const NavRight = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  cursor: pointer;
  i {
    padding-right: 3px;
  }
  &.actived {
    color: #ea6f5a;
  }
`;

export const SearchInfo = styled.div`
  background: #fff;
  position: absolute;
  left: 0;
  top: 56px;
  width: 300px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;

export const SearchInfoTitle = styled.div`
  line-height: 20px;
  font-size: 14px;
  color: #969696;
  margin-top: 20px;
  margin-bottom: 15px;
`;

export const SearchInfoSwitch = styled.div`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .iconfont{
    font-size: 16px;
  }
  .spin{
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all 0.2s ease-in;
    transform-origin: center center;
  }
`;

export const SearchInfoWrapper = styled.div`
  overflow:hidden;
`;

export const SearchInfoItem = styled.a`
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 15px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
  cursor: pointer;
`;

export const LoginAndWrite = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.div`
  width: 80px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  margin: 9px 5px 0 15px;
  border: 1px solid rgba(236, 97, 73, 0.7);
  border-radius: 20px;
  font-size: 15px;
  color: #ea6f5a;
  background-color: transparent;
  cursor: pointer;
  &.reg:hover {
    color: #ec6149;
    border-color: #ec6149;
    background-color: rgba(236, 97, 73, 0.05);
  }
  &.writting {
    color: #fff;
    background-color: #ec6149;
  }
`;
