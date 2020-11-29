import styled from 'styled-components';

export const Footer = styled.footer`
    background: black;
    text-align: center;
    padding: 1.3em 0;
    flex: 0 0 auto;
`

export const IconsContainer = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
`

export const Icon = styled.img`
    max-width: 25px;
    margin: 0 .5em;
`

export const Link = styled.a`
`

export const Wave = styled.div`
    & {
        background: black;        
        height: 50px;
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
        background-image:
        radial-gradient(circle at 10px -5px, transparent 12px, black 13px);
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
        background-image:
        radial-gradient(circle at 10px 15px, black 12px, transparent 13px);
    }
`
