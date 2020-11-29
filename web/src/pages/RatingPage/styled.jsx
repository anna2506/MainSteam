import styled from 'styled-components';

export const Content = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
`

export const Main = styled.div`
    flex: 1 0 auto;
    position: relative;
    background: #FFAD64;
`

export const Container = styled.div`
    margin: 0 auto;
    width: 90%;
    max-width: 900px;
    display: flex;
    
    justify-content: space-between;
`

export const OverallRating = styled.div`
    width: 77%;
    display: flex;
    flex-direction: column;
`

export const PeopleByRating = styled.div`
    min-height: 15em;
    width: 20%;
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.1);
`

export const PeopleByRatingTitle = styled.p`
    padding: .5em 0;
    text-align: center;
    font-size: .8rem;
`

export const Card = styled.div`
    display: flex;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    width: 100%;
    padding: 1em;
    align-items: center;
`

export const Place = styled.p`
    padding-right: 1em;
`

export const Country = styled.img`
    width: 10%;
    padding-right: 1em;
`

export const Nickname = styled.a`
    padding-right: 1em;
    color: #fff;
    text-decoration: none;
    &:hover, focus {
        color: #1d1d1d;
    }    
`
