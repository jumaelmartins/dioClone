import styled from "styled-components";

export const StripContainer = styled.div`
    width:100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 5rem;
    align-items: flex-end;
    padding-left: 15.3rem;
`

export const Strip = styled.div`
    width: 5rem;
    height: .5rem;
    background: linear-gradient(to right, #8646AE, #362252);
    border-radius: 2rem;
`
export const WrapperLogin = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
   
`
export const ContainerLogin = styled.div`
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    padding-top: 5rem;
    font-weight: bolder;
    max-width: 100%;
   

    p {
        font-size: 30px;
        padding-left: 2.3rem;
    }

    a {
        text-decoration: none;
        color: white;
        font-size: 13.5px;
        margin-left: -1.5rem;
        font-weight: normal;
        align-self: center;

    }
    h1 {
        padding-left: 4rem;
    }
`
export const FooterLoginContainer = styled.div`
   
    display: flex;
    height: 5rem;
    justify-content: center;
    p, a {
        font-size: .7rem;
        margin: 5px;
        font-weight: normal;
    }
`
export const BackToLogin = styled.div`
   
    width: 80%;
    text-align: center;
    a {
        color: #8546AD;
        font-size: 1.19rem;
        margin-left: -3rem;
        text-transform: uppercase;
    }
    
`
export const FooterLogin = styled.div`
    max-width: 100%;
    display: flex;
    height: 5rem;
    justify-content: flex-start;
    align-items: center;
    margin-left: -8rem;
    margin-top: -3rem;
    p, a {
        font-size: .75rem;
        margin: 3px;
        font-weight: bold;
    }
`