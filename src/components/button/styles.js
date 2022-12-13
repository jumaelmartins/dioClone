import styled, { css } from "styled-components";

export const ButtonContainer = styled.button `
    position: relative;
    width: 100%;
    max-width: 80%;
    height: 1.5rem;
    padding: .35rem 1.4rem;
    border-radius: 2rem;
    color: white;
    background-color: #565656;
    text-transform: uppercase;
    border: none;
    text-align: center;
    margin: 3px;
    
    
 

    &:hover {
        cursor: pointer;
        background-color: #E4105D;
    }

    ${({variant}) => variant === "secondary" && css`
        background-color: #E4105D;
        width: 200;
        min-width: 80%;
        height: 37px;
        font-weight: bold;

        &:hover {
            filter: brightness(1.2);
        }
    `}

    ${({variant}) => variant === "third" && css`
        height: 2.3rem;
        width: 16.0rem;
        justify-content: center;
        text-align: center;

        &:hover {
            filter: brightness(1.2);
            background-color: #8646AE;
        }
    `}
`