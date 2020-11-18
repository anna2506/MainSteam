import styled from "styled-components";


export const mainPageContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 84px 1fr 83px;
    grid-template-areas: 
        "h h h h h h h h h h h h"
        "c c c c c c c c c c c c"
        "f f f f f f f f f f f f";
`

export const contentContainer = styled.div`
    background-color: #FFAD64;
    grid-area: c;
    grid-column: 1 / -1;
    position: relative;
    width: 100%;
    
`

export const mainPageContent = styled.div`
    position: absolute;
    margin: auto;
    top: 0; left: 217px; bottom: 0; right: 217px;
    display: flex;
    justify-content: flex-end;
`

export const imageContainer = styled.div`
    position: relative;
    overflow: hidden;
    align-self: center;
    width: 520px;
`

export const mainPageImage = styled.img`
    width: 100%;
    height: auto;
`

export const loginButton = styled.button`
    position: absolute;
    background: #0201C7;
    box-shadow: 0px 2px 4px rgba(30, 30, 64, 0.25);
    border-radius: 10px;
    width: 96px;
    height: 32px;
    font-size: 16px;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    top: 65%;
    right: 47%;
    outline: none;
`

export const typography = styled.p`
    position: absolute;
    width: 489px;
    top: 18%;
    right: 35%;
    font-size: 60px;
    line-height: 60px;
    text-align: center;
    color: #FFEC00;
    text-shadow: 0px 8px 4px rgba(30, 30, 64, 0.25);
    z-index: 100;
 `
