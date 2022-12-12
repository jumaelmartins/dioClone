import styled, { css } from "styled-components";

export const ButtonContainer = styled.button `
    position: relative;
    width: 100%;
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

    ${({variant}) => variant !== "primary" && css`
        background-color: #E4105D;

        &:hover {
            filter: brightness(1.2);
        }
    `}
`