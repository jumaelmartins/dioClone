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
        padding-left: 1rem;
    }
`
export const FooterLoginContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    max-width: 50%;
    align-items: center;

    a {
        margin-left: 3.5rem;
        flex-wrap: nowrap;
        text-decoration: none;
        font-weight: bold;
        white-space: nowrap;
    }

`

