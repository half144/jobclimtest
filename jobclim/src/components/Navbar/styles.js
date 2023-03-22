import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  background-color: white;
  width: 25vw;
  min-height: 100vh;
  border-radius: 0px 50px 50px 0px;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;

  img {
    width: 65%;
  }
`;

export const User = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const UserPhoto = styled.div`
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
`;

export const UserName = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

export const UserOffice = styled.p`
  font-size: 12px;
  font-weight: 400;
`;

export const NavListUl = styled.ul`
  margin-top: 2.5em;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const NavListLi = styled.li``;

export const NavItem = styled(NavLink)`
  height: 60px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  padding-left: 3em;
  align-items: center;
  gap: 1em;
  width: 100%;
  color: black;

  &.active {
    background-color: #5686e1;
    color: white;
  }
  &:hover {
    opacity: 0.8;
  }
`;
