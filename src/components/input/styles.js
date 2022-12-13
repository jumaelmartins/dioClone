import styled from "styled-components";

export const Strip = styled.div`
    width: 5rem;
    height: .5rem;
    background: linear-gradient(to right, #8646AE, #362252);
    border-radius: 2rem;
`

export const InputContainer = styled.div`
    width: 100%;
    max-width: 15rem;
    height: 2rem;

    border-bottom: solid 1px #3B3450;
    display: flex;
    align-items: center;
    margin-bottom: .5rem;

`
export const InputText = styled.input`
    background-color: transparent;
    height: 2rem;
    border: 0;
    color: white;
    box-shadow: 0;
    outline: 0;
    width: 100%;
`
export const InputIcon = styled.div`
    margin-right: 10px;
`