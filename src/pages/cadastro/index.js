import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import PersonIcon from '@mui/icons-material/Person';

import Button from "../../components/button";
import Input from "../../components/input";
import Nav from "../../components/nav";
import { BackToLogin, ContainerLogin, FooterLoginContainer, Strip, StripContainer, WrapperLogin, FooterLogin } from "./styles";
import { height } from '@mui/system';
    const Cadastro = () => {
        return(<>
                <Nav/>
                    <StripContainer>
                        <Strip></Strip>
                        <Strip></Strip>
                    </StripContainer>
                    <WrapperLogin>
                        <ContainerLogin>
                            
                            <p>A plataforma para <br/>você aprender com <br/>experts, dominar as<br/> principais<br/> tecnologias e<br/> entrar mais rápido<br/> nas empresas mais<br/> desejadas.</p>
                            <br/>
                            <BackToLogin>
                                <a href='/login'>voltar para login</a>
                            </BackToLogin>
                        </ContainerLogin>
                        <ContainerLogin>
                            <h1>Comece agora grátis</h1>
                            <br/>
                            <a href="#">Crie sua conta e make the change._</a>
                            <br/><br/>
                            <Input placeholder="Nome Completo" leftIcon={<PersonIcon/>}/>
                            <Input placeholder="Seu melhor @e-mail" leftIcon={<MailIcon/>}/>
                            <Input placeholder="Celular ex: (71) 99999-9999" leftIcon={<SmartphoneIcon/>}/>
                            <Input placeholder="Senha" leftIcon={<LockIcon/>}/>
                            <br/>
                            <Button title="criar minha conta grátis" variant="third"></Button>
                            <br/>
                            <FooterLoginContainer>
                                <p>Ao clicar em "criar minha conta grátis", declaro que <br/> aceito as <a href='https://www.dio.me/terms-and-policies#polices' style={{color:"#8546AD"}}>Políticas de Privacidade</a> e os <a href='https://www.dio.me/terms-and-policies#terms' style={{color:"#8546AD"}}>Termos de Uso</a><br/> da DIO.</p>
                            </FooterLoginContainer>
                            <FooterLogin><p>Já tenho conta.</p><a href='/login' style={{color:"green"}}>Fazer login.</a></FooterLogin>
                        </ContainerLogin>
                    </WrapperLogin>
                    
            </>)}

export default Cadastro;