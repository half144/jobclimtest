import { useState } from "react"
import { Title } from "../../globalStyle"
import { Container, FormsArea, ConsultaForm, CausaForm, CausaItem, Label, Input, LineForm, Pagamento, Search, InputIncluir, Nav, NavItem, NavLi, NavListUl } from "./styles"
import { FaSearch, FaPlus } from "react-icons/fa"
import { Outlet } from "react-router-dom"


const Atendimento = () => {
    const [selectedCausaItem, setSelectedCausaItem] = useState()
    const paymentStatus = true
    const handleCausaItem = e => {
        setSelectedCausaItem(e.target.innerText)
    }
    return (
        <Container>
            <Title>Atendimento</Title>
            <FormsArea>
                <ConsultaForm>
                    <LineForm>
                        <Label>
                            Identificação
                            <Input type="text" />
                        </Label>
                        <Label>
                            Referencia
                            <Input type="text" />
                        </Label>
                        <Label>
                            Pagamento
                            <Pagamento status={paymentStatus}>{paymentStatus ? "Feito" : "Pendente"}</Pagamento>
                        </Label>
                        <Label>
                            Emetida em
                            <Input type="date" />
                        </Label>
                        <Label>
                            Local de origem
                            <Input type="text" />
                        </Label>
                    </LineForm>
                    <LineForm>
                        <Label>
                            Paciente
                            <Search>
                                <div className="searchInput">
                                    <Input type="text" disabled value="32 - Maria Antonia" />
                                    <div className="icon">
                                        <FaSearch />
                                    </div>
                                </div>
                                <p>Sexo: F - Nascimento 10/02/1999</p>
                            </Search>
                        </Label>
                        <Label>
                            D.U.M
                            <Input type="text" />
                        </Label>
                        <Label>
                            Leito
                            <Input type="text" />
                        </Label>
                    </LineForm>
                    <LineForm>
                        <Label>
                            Convenio
                            <Search>
                                <div className="searchInput">
                                    <Input type="text" />
                                    <div className="icon">
                                        <FaSearch />
                                    </div>
                                </div>
                            </Search>
                        </Label>
                        <Label>
                            Horas em jejum
                            <Input type="text" />
                        </Label>
                        <Label>
                            Alta
                            <Input type="text" />
                        </Label>
                    </LineForm>
                    <LineForm>
                        <Label>
                            Medico
                            <Search>
                                <div className="searchInput">
                                    <Input type="text" />
                                    <div className="icon">
                                        <FaSearch />
                                    </div>
                                </div>
                            </Search>
                        </Label>
                        <Label>
                            CBO-S
                            <Input type="text" />
                        </Label>
                        <Label>
                            Retorno
                            <Input type="text" />
                        </Label>
                    </LineForm>
                </ConsultaForm>
                <CausaForm>
                    <CausaItem selected={selectedCausaItem} onClick={handleCausaItem}>SEPSE</CausaItem>
                    <CausaItem selected={selectedCausaItem} onClick={handleCausaItem}>Dor toráxica</CausaItem>
                    <CausaItem selected={selectedCausaItem} onClick={handleCausaItem}>AVC</CausaItem>
                    <CausaItem selected={selectedCausaItem} onClick={handleCausaItem}>Traumatologia</CausaItem>
                    <InputIncluir type="submit">
                        <FaPlus />
                        Incluir
                    </InputIncluir>
                </CausaForm>
            </FormsArea>
            <Nav>
                <NavListUl>
                    <NavLi>
                        <NavItem to="eventos">Eventos</NavItem>
                    </NavLi>
                    <NavLi>
                        <NavItem to="amostras">Amostras</NavItem>
                    </NavLi>
                </NavListUl>
            </Nav>
            <Outlet />
        </Container>
    )
}

export default Atendimento