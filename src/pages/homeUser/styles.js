import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    width: 100%;
    max-width: 80%;
    margin: 0 auto;

    margin-top: 120px;
    justify-content: space-between;
    flex-direction: row;
`
export const Title = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: white;
    margin-bottom: 24px;   
`

export const TitleHighlight = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: white;
    margin-bottom: 24px;   
`
export const Collum = styled.div`
    flex:${({flex}) => flex};
    padding-right: 24px;
`