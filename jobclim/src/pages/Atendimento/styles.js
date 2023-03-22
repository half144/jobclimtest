import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 3em;
`;

export const FormsArea = styled.form`
  margin-top: 1em;
  display: flex;
  justify-content: space-between;
`;

export const ConsultaForm = styled.div`
  height: 400px;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 4em;
  padding-bottom: 4em;
  padding-left: 2em;
  padding-right: 2em;
  width: 84%;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
`;

export const CausaForm = styled.div`
  height: 400px;
  width: 15%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
`;

export const CausaItem = styled.div`
  color: black;
  font-weight: 700;
  font-size: 14px;
  height: 50px;
  color: ${(props) => (props.children == props.selected ? "white" : "black")};
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 100%;
  &:hover {
    opacity: 0.8;
  }
  background-color: ${(props) =>
    props.children == props.selected ? "#5686e1" : "white"};
`;

export const Label = styled.label`
  display: flex;
  font-weight: 700;
  font-size: 12px;
  flex-direction: column;
  gap: 2px;
  width: 100%;

  .searchInput {
    display: flex;
    .icon {
      height: 30px;
      margin-left: 10px;
      width: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #00287b;
      border-radius: 8px;
    }
  }
`;
export const Input = styled.input`
  height: 30px;
  border: 1px solid #00287b;
  border-radius: 8px;
  padding-left: 1em;
  outline: none;
  width: 100%;

  &:disabled {
    background-color: #c1c1c1;
    border: 1px solid #dbdbdb;
  }
`;

export const LineForm = styled.div`
  display: flex;
  gap: 10px;
  max-width: 100%;
`;

export const Pagamento = styled.div`
  background-color: ${(props) => (props.status ? "green" : "#fd6666")};
  height: 30px;
  border-radius: 8px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Search = styled.div`
  width: 435px;
`;

export const InputIncluir = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  top: 70px;
  width: 100%;
  height: 60px;
  background-color: #5686e1;
  border: none;
  border-radius: 0px 0px 20px 20px;
  cursor: pointer;
  color: white;
`;

export const Nav = styled.nav`
  background-color: #f0f0f0;
  height: 60px;
  width: 100%;
  margin-top: 2em;
`;

export const NavListUl = styled.ul`
  margin-top: 5em;
  display: flex;
  flex-direction: row;
  gap: 5px;
  height: 50px;
`;

export const NavLi = styled.li`
  position: relative;
  top: -50px;
  left: calc(100% - 200px);
  display: flex;
  justify-content: center;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-weight: 700;
  padding-left: 0.5em;
  padding-right: 0.5em;
  background-color: #f0f0f0;
  border-radius: 8px;

  &.active {
    background-color: white;
    color: #00287b;
  }
`;
