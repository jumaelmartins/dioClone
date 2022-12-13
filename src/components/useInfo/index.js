
import { InfoContainer, NameText, Progress, UserPicture } from './styles'

const UseInfo = ({name, image, percentual}) => {
    return (
        <InfoContainer>
            <UserPicture src={image}/>
            <div>
                <NameText>{name}</NameText>
                <Progress percentual={percentual}/>
            </div>
        </InfoContainer>
    )


}

export default UseInfo;