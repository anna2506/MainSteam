import styled from 'styled-components';

export const footerWrapper = styled.div`
    background-color: black;
    position: fixed; 
    height: 83px;   
    left: 0;
    right: 0;
    bottom: 0;  
    grid-area: f;
    grid-column: 1 / -1;
`

export const wave = styled.div`
    & {
        background: black;
        
        position: relative;
    }
    &:before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        background-repeat: repeat;
        height: 10px;
        background-size: 20px 20px;
        background-image: radial-gradient(circle at 10px -5px, transparent 12px, black 13px);
    }
    &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        background-repeat: repeat;
        height: 15px;
        background-size: 40px 20px;
        background-image: radial-gradient(circle at 10px 15px, black 12px, transparent 13px);
    }
`

export const iconsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: center;
`

//could be removed
export const iconWrapper = styled.div`
    width: 36px;
    height: 36px;
`

