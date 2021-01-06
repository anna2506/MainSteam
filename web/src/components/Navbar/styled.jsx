import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
    background: #efefef;
    padding: 1.3em 0;
    background:  ${(props) => props.bg};
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
        color: ${(props) => props.linkColor};
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
        color: ${(props) => props.linkColor};
    }
`;
