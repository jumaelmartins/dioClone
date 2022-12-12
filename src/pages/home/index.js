import { HomeContainer, ImgContainer, SectionContainer, Title, Paragrafo } from "./styles";
import Button from "../../components/button";
import Nav from "../../components/nav";
import imagemPrincipal from "./imagemPrincipal.png"
import { Row } from "../../components/nav/styles";
    const Home = () => {
        return(<>
            <Nav/>
            <HomeContainer>
                < SectionContainer> 
                <Title>{'Desenhe'}
                    <br></br>
                     o seu futuro global 
                     <br></br>
                     agora!</Title>
                     <br></br>
                    <Paragrafo>Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e
                    <br></br>
                         encare seu novo desafio profissional, evoluindo em comunidade com os 
                         <br></br>
                         melhores experts.</Paragrafo>
                    <Row>
                        <Button variant="secondary" title='começar agora'/>
                    </Row>
                    
                </SectionContainer>
                <ImgContainer>
                    <img src={imagemPrincipal} alt={imagemPrincipal}/>
                </ImgContainer>
            </HomeContainer>
            </>)}

export default Home;