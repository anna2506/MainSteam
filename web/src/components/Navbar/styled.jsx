import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
    background: #efefef;
    padding: 1.3em 0;
    background: linear-gradient(180deg, #C87D37 22.92%, rgba(255, 173, 100, 0) 100%), #FFAD64;
`;

export const Container = styled.div`
    margin: 0 auto;
    width: 90%;
    max-width: 900px;
    display: flex;
    justify-content: space-between;
`;

export const LoginButton = styled.button`
    border: 0;
    background: transparent;
    &:hover, focus {
        color: #1d1d1d;
        cursor: pointer;
    }
`;

export const Ul = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
`;

export const Li = styled.li`
    margin-left: 2em;
`;

export const StyledLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    &:hover, focus {
        color: #1d1d1d;
    }
`;
