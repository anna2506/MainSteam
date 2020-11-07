import styled from "styled-components";

export const container = styled.div`
    grid-area: h;
    grid-column: 1 / -1;
    position: relative;
`

export const buttonsWrapper = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: 200px;
`

export const navContainer = styled.div`
    position: absolute;
    max-width: 1102px;
    margin: auto;
    top: 0; left: 0; bottom: 0; right: 0;
`

export const buttonNav = styled.button`
    color: white;
    width: 106px;
    height: 40px;
    font-size: 20px;
    border: 0;
    padding: 0;
    background: none;
    
    text-align: center;
    margin: 42px;
    outline: none;
    &:hover {
        cursor: pointer;
        background: rgba(200, 125, 55, 0.5);
    }
`

