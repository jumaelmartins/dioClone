
import { InputContainer, InputText, InputIcon} from "./styles";
const Input = ({leftIcon, name, ...rest}) => {
  return(
   <InputContainer> 
       {leftIcon ? (<InputIcon>{leftIcon}</InputIcon>) : null}
       <InputText {...rest}/>
   </InputContainer>
 )}

export default Input;