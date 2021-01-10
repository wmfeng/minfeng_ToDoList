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
  background: #eee;
  display: flex;
  justify-content: space-between;
`;

export const NavLeft = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SearchWrapper = styled.div`
  
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
