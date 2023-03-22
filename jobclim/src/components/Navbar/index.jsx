import { Logo, Nav, NavItem, NavListLi, NavListUl, User, UserName, UserOffice, UserPhoto } from "./styles"
import { BsPersonFill, BsBox } from "react-icons/bs"
import { FaHeartbeat, FaStethoscope, FaSyringe, FaWrench, FaMoneyBillWave } from "react-icons/fa"



const Navbar = () => {
    return (
        <Nav>
            <Logo>
                <img src="https://i.imgur.com/3GcuGlN.png" alt="Logo" />
            </Logo>
            <User>
                <UserPhoto>
                    <BsPersonFill color="#5686E1" size={50} />
                </UserPhoto>
                <UserName>
                    Alberto Sousa
                </UserName>
                <UserOffice>
                    Clinico Geral
                </UserOffice>
            </User>
            <NavListUl>
                <NavListLi>
                    <NavItem to="/atendimento">
                        <FaStethoscope />
                        Atendimento
                    </NavItem>
                </NavListLi>
                <NavListLi>
                    <NavItem to="/analise">
                        <FaHeartbeat />
                        Analise
                    </NavItem>
                </NavListLi>
                <NavListLi>
                    <NavItem to="/equipamentos">
                        <FaSyringe />
                        Equipamentos
                    </NavItem>
                </NavListLi>
                <NavListLi>
                    <NavItem to="/manutencao">
                        <FaWrench />
                        Manutenção
                    </NavItem>
                </NavListLi>
                <NavListLi>
                    <NavItem to="/estoque">
                        <BsBox />
                        Estoque
                    </NavItem>
                </NavListLi>
                <NavListLi>
                    <NavItem to="/financeiro">
                        <FaMoneyBillWave />
                        Financeiro
                    </NavItem>
                </NavListLi>
            </NavListUl>
        </Nav>
    )
}

export default Navbar