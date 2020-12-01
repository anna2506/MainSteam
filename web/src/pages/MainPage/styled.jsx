import styled from 'styled-components';

export const Content = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
`;

export const Main = styled.main`
    flex: 1 0 auto;
    position: relative;
    background-color: #FFAD64;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
    margin: 0 auto;
    width: 90%;
    max-width: 900px;
    display: flex;
    align-self: center;
    position: relative;
    height: 55%;
`;

export const Title = styled.h2`
   position: absolute;
   font-size: 3rem;
   font-weight: 700;
   top: 30%;
   left: 45px;
   color: #FFFFFF;
   text-shadow: 0px 8px 4px rgba(29, 29, 29, 0.5);
`;

export const ButtonContainer = styled.div`
    width: 45%;
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-item: center;
    width: 55%;
`;

export const SignInButton = styled.button`
    background: #0201C7;
    box-shadow: 0px 2px 4px rgba(30, 30, 64, 0.25);
    border: none;
    border-radius: 10px;
    padding: .4em;
    vertical-align: middle;
    float: right;
    position: absolute;
    left: 35%;
    top: 70%;
    transition: all 500ms ease;
    &:hover, focus {
        background: rgba(255,255,255,1);
        color: #0201C7;
        box-shadow: inset 0 0 0 3px #0201C7;
        cursor: pointer;
    }
    ${(props) => props.hide && 'display: none;'}
`;

export const Image = styled.img`
    width: 100%;
`;
