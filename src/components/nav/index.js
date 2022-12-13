import Button from "../button";
import { Menu, NavContainer, Row, Wrapper } from "./styles";
import DioLogo from"./Dio_Logo.png"
import { useNavigate } from "react-router-dom";


const Nav = () =>{
    const navigate = useNavigate();

    const HandleClickSignin= () => {
        navigate('/login')
    }

    const HandleClickSignUp = () => {
        navigate('/cadastro')
    }
    return(
        <Wrapper>
            <NavContainer>
                <Row>
                    <img src={DioLogo} alt="DioLogo"/>
                </Row>
                <Row>
                    <Menu href="/">Home</Menu>
                    <Menu href="#">Catálogo</Menu>
                    <Menu href="#">Planos</Menu>
                    <Menu href="#">Para Empresas</Menu>
                    <Button title='entrar' onClick={HandleClickSignin}/>
                    <Button title='cadastrar' onClick={HandleClickSignUp}/>
                </Row>
            </NavContainer>
        </Wrapper>
    )
}

export default Nav;