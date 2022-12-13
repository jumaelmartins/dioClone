import Nav from "../../components/nav";
import Card from "../../components/card";
import { Collum, Container, Title, TitleHighlight } from "./styles";
import UseInfo from "../../components/useInfo";


const HomeUser = () => {
    return(<>
            <Nav/>
            <Container>
                <Collum flex={3}> 
                    <Title>Feed</Title>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </Collum>
                <Collum flex={1}>
                    <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
                    <UseInfo name={'Jumael Martins'} percentual={90} image={'https://avatars.githubusercontent.com/u/106921450?v=4'}/>
                    <UseInfo name={'Jumael Martins'} percentual={70} image={'https://avatars.githubusercontent.com/u/106921450?v=4'}/>
                    <UseInfo name={'Jumael Martins'} percentual={63} image={'https://avatars.githubusercontent.com/u/106921450?v=4'}/>
                    <UseInfo name={'Jumael Martins'} percentual={50} image={'https://avatars.githubusercontent.com/u/106921450?v=4'}/>
                    <UseInfo name={'Jumael Martins'} percentual={40} image={'https://avatars.githubusercontent.com/u/106921450?v=4'}/>
                </Collum>
            </Container>

        </>)}

export default HomeUser;