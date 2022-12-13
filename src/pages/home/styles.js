import styled from "styled-components";

export const Container = styled.main`
    background-color:  #1E192C;
    height: 100vh;
    width: 100%;
`

export const HomeContainer = styled.div`
    color: white;
    display: flex;
    width: 100%;
    max-width: 80;
    margin: 0 auto;
    justify-content: space-between;
    align-items:center;
    height: 70vh;
    background-color: black;
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
    margin: 0;
    h1, p {
        background-color: black;
    }
`
export const Title = styled.h1`
    font-size: 48px;
    padding-left: 10rem;
`
export const Paragrafo = styled.p`
    padding-left: 10rem;
`
export const ContainerButtonHomePage = styled.div `

    padding-left: 10rem;
    padding-right: 20rem;

`