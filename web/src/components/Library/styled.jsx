import styled from 'styled-components';

export const Container = styled.div`
    margin: 0;
    display: flex;
    flex-direction: column;
`

export const CardsHeader = styled.p`
    font-size: 1.2rem;
    margin-bottom: 1.2em;
`

export const Card = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 1.5em;
    margin-bottom: 1.5em;
`

export const Image = styled.img`
    width: 50%;
`

export const LinkContainer = styled.div`
    width: 40%;
`

export const Link = styled.a`
    color: #fff;
    text-decoration: none;
    &:hover, focus {
        color: #FFCD48;
    }    
`

export const Title = styled.h3`
    
`


