import styled from "styled-components";

export const HomeContainer = styled.main`
    background-color: lightgray;
    color: white;
    display: flex;
    width: 100%;
    margin: 0 auto;
    justify-content: space-between;
    align-items:center;
    height: 70vh;
    background-color: black;

    &::after {
        content: "";
        position: absolute;
    }
`
export const ImgContainer = styled.div `
    max-height: 70vh;
    background-color: #151515;
    img {
        max-height: 70vh;
    }
`
export const SectionContainer = styled.div`
    display: flex;
    background-color: black;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 18px;
    h1, p {
        background-color: black;
    }
`
export const Title = styled.h1`
    font-size: 48px;
`
export const Paragrafo = styled.p`
    margin-left: 130px;
`
