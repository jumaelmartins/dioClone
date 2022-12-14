import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';

import Button from "../../components/button";
import Input from "../../components/input";
import Nav from "../../components/nav";
import { ContainerLogin, FooterLoginContainer, Strip, StripContainer, WrapperLogin, ContainerL } from "./styles";
    
    const Login = () => {
        const navigate = useNavigate();

        const HandleClickSignUp = () => {
            navigate('/homeUser')
        }

        return(<>
                <Nav/>
                <ContainerL>
                    <StripContainer>
                        <Strip></Strip>
                        <Strip></Strip>
                    </StripContainer>
                    <WrapperLogin>
                        <ContainerLogin>
                            
                            <p>A plataforma para <br></br>você aprender com <br></br>experts, dominar as<br></br> principais<br></br> tecnologias e<br></br> entrar mais rápido<br></br> nas empresas mais<br></br> desejadas.</p>
                        </ContainerLogin>
                        <ContainerLogin>
                            <h1>Já tem cadastro?</h1>
                            <br></br>
                            <a href="#">Faça seu login e make the change._</a>
                            <br></br><br></br>
                            <Input placeholder="E-mail" leftIcon={<MailIcon/>}/>
                            <Input placeholder="Senha" leftIcon={<LockIcon/>}/>
                            <br></br>
                            <Button title="entrar" variant="third" onClick={HandleClickSignUp}></Button>
                            <br></br>
                            <FooterLoginContainer>
                                <a href="#" style={{color: "yellow"}}>Esqueci minha senha.</a>
                                <a href="/cadastro" style={{color: "green"}}>Criar conta</a>
                            </FooterLoginContainer>
                        </ContainerLogin>
                    </WrapperLogin>
                </ContainerL>    
            </>)}

export default Login;