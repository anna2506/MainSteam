import styled from 'styled-components';

export const Content = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
`;

export const Main = styled.div`
    flex: 1 0 auto;
    position: relative;
    background: linear-gradient(to top left, rgba(255, 205, 72, 1) 50%, rgba(255, 173, 100, 1) 50% );
`;

export const Container = styled.div`
    margin: 0 auto;
    width: 90%;
    height: 100%;
    max-width: 900px;
    display: flex;
    align-self: stretch;
    justify-content: space-between;
`;

export const OverallRating = styled.div`
    width: 77%;
    display: flex;
    flex-direction: column;
`;

export const BannerPlace = styled.div`
    width: 20%;
    background: rgba(0, 0, 0, 0.1);
    min-height: 100%;
`;

export const Banner = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const PeopleByRatingTitle = styled.p`
    padding: .5em 0;
    text-align: center;
    font-size: .8rem;
`;

export const Card = styled.div`
    display: flex;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    width: 100%;
    padding: 1em;
    align-items: center;
    margin-top: 1em;
`;

export const Place = styled.p`
    padding-right: 1em;
`;

export const Country = styled.img`
    width: 10%;
    padding-right: 1em;
`;

export const Nickname = styled.a`
    padding-right: 1em;
    color: #000;
    text-decoration: none;
    &:hover, focus {
        color: #1d1d1d;
    }    
`;

export const Exp = styled.p`
    align-self: flex-end;
`;
