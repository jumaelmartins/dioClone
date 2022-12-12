import Button from "../button";
import { Menu, NavContainer, Row, Wrapper } from "./styles";
import DioLogo from"./Dio_Logo.png"
import { ButtonContainer } from "../button/styles";

const Nav = () =>{
    return(
        <Wrapper>
            <NavContainer>
                <Row>
                    <img src={DioLogo} alt="DioLogo"/>
                </Row>
                <Row>
                    <Menu href="#">Home</Menu>
                    <Menu href="#">Catálogo</Menu>
                    <Menu href="#">Planos</Menu>
                    <Menu href="#">Para Empresas</Menu>
                    <Button title='entrar'/>
                    <Button title='cadastrar'/>
                </Row>
            </NavContainer>
        </Wrapper>
    )
}

export default Nav;