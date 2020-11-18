import styled from "styled-components";

export const container = styled.div`
    grid-area: h;
    grid-column: 1 / -1;
    position: relative;
    background: linear-gradient(180deg, #C87D37 22.92%, rgba(255, 173, 100, 0) 100%), #FFAD64;
`

export const navContainer = styled.nav`
    margin-right: 217px;
    margin-left: 217px;
    height: 100%;
`

export const ul = styled.ul`
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    li {
        text-align: center;        
        color: white;
        font-size: 20px;
        box-sizing: border-box;        
        list-style-type: none;
        padding: 21px;
    }
    .login {
        margin-right: auto;
        padding: 0;
    }
`
