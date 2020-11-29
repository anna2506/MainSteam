import styled from 'styled-components';

export const Content = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
`

export const Main = styled.main`
    flex: 1 0 auto;
    position: relative;
    background: #FFAD64;
`

export const Container = styled.div`
    margin: 0 auto;
    width: 90%;
    max-width: 900px;
    display: flex;
`

export const Title = styled.h2`
   position: absolute;
   font-size: 3rem;
   top: 30%;
   color: #FFFFFF;
   text-shadow: 0px 8px 4px rgba(29, 29, 29, 0.5);
`

export const ButtonContainer = styled.div`
    width: 45%;
    position: relative;
`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-item: center;
    width: 55%;
`

export const SignInButton = styled.button`
    background: #0201C7;
    box-shadow: 0px 2px 4px rgba(30, 30, 64, 0.25);
    border-radius: 10px;
    padding: .4em;
    vertical-align: middle;
    float: right;
    position: absolute;
    top: 65%;
    left: 70%;
    transition: all 500ms ease;
    &:hover, focus {
        background: rgba(255,255,255,1);
        color: #0201C7;
        box-shadow: inset 0 0 0 3px #0201C7;
        cursor: pointer;
    }
`

export const Image = styled.img`
    width: 100%;
`

