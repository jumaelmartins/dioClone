import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import { CardContainer, Content, HassInfo, ImgBackground, PostInfo, UserInfo, UserPicture } from './styles'

const Card = () => {
    return(
        <CardContainer>
            <ImgBackground src='https://images.pexels.com/photos/13716813/pexels-photo-13716813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            <Content>
                <UserInfo>
                    <UserPicture src='https://avatars.githubusercontent.com/u/106921450?v=4'/>
                    <div>
                        <h4>Jumael Martins</h4>
                        <p>Há 8 Minutos</p>
                    </div> 
                </UserInfo>
                <PostInfo>
                    <h4>Projeto Curso REACTJS </h4>
                    <p>Projeto Feito no BootCamp OrangeTech</p>
                </PostInfo>
                <HassInfo>
                    <h4>#hmtl #css #javascript</h4>
                    <p>
                        <ThumbUpIcon/> 10
                    </p>
                </HassInfo>
            </Content>
        </CardContainer>
    )
}

export default Card;