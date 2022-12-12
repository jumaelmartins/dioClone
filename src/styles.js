import { createGlobalStyle } from "styled-components";
import styled from "styled-components";


const GlobalStyle = createGlobalStyle`
    *, body{
        margin:0;
        padding:0;
        font-family: sans-serif;
        
    }
`

export default GlobalStyle;

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #1E192C;
`