import styled from "styled-components";

export const NavContainer = styled.div `
    height: 3rem;
    width: 100%;
    max-width: 80%;
    
    background-color: #151515;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;


    img {
        max-height:100%;
    }
`
export const Row = styled.div `
    height: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
        max-height:100%;
    }
`
export const Collumn = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        max-height:100%;
    }
`

export const Wrapper = styled.div`
    background-color: #151515;
    display: flex;
    height: 3rem;
    width: 100%;
    align-items: center;
    justify-content: center;

`

export const Menu = styled.a`
    text-decoration: none;
    margin: 5px;
    color: white;
    font-style: normal;
    font-size: .8rem;
    white-space: nowrap;
    background-color:#151515;

    &:hover {
        color:#E4105D;
    }
`

