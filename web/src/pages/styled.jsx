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
    
`

export const mainPageContent = styled.div`
    position: absolute;
    max-width: 1102px;
    margin: auto;
    top: 0; left: 0; bottom: 0; right: 0;
`

export const imageContainer = styled.div`
    position: relative;
`

export const mainPageImage = styled.img`
    position: absolute;
    max-width: 362px;
    top: 50%;
    left: 50%;
    margin-right: -50%;
`
