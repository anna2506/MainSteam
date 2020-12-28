import styled from 'styled-components';

export const Container = styled.div`
    margin: 0;
    display: flex;
    flex-direction: column;
`;

export const CardsHeader = styled.p`
    font-size: 1.2rem;
    margin-bottom: 1.2em;
    color: #fff;
`;

export const Card = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    padding: 1.5em 0.5em;
    margin-bottom: 1.5em;
    background: rgba(131, 131, 227, .3);
    
`;

export const Image = styled.img`
    border: .2em solid #fff;
    width: 60%;
    object-fit: cover;
`;

export const LinkContainer = styled.div`
    width: 40%;
    padding: 0 .5em;
    text-align: center;
`;

export const Link = styled.a`
    color: #fff;
    text-decoration: none;
    &:hover, focus {
        color: #FFCD48;
        cursor: pointer;
    }    
`;

export const Title = styled.h3`
    color: #fff;
`;
