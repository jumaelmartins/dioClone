import { HomeContainer, ImgContainer, SectionContainer, Title, Paragrafo, ContainerButtonHomePage } from "./styles";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import Nav from "../../components/nav";
import imagemPrincipal from "./imagemPrincipal.png"
    const Home = () => {

        const navigate = useNavigate();

        const HandleClickSignUp = () => {
            navigate('/cadastro')
        }

        return(<>
            <Nav/>
            <HomeContainer>
                < SectionContainer> 
                <Title>{'Desenhe'}
                    <br/>
                     o seu futuro global 
                     <br/>
                     agora!</Title>
                     <br/>
                    <Paragrafo>Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e
                    <br/>
                         encare seu novo desafio profissional, evoluindo em comunidade com os 
                         <br/>
                         melhores experts.</Paragrafo>
                    <ContainerButtonHomePage>
                        <br/>
                        <br/>
                        <Button variant="secondary" title='começar agora' onClick={HandleClickSignUp}/>
                    </ContainerButtonHomePage>
                    
                </SectionContainer>
                <ImgContainer>
                    <img src={imagemPrincipal} alt={imagemPrincipal}/>
                </ImgContainer>
            </HomeContainer>
            </>)}

export default Home;