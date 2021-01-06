import styled from 'styled-components';

export const Content = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
`;

export const Main = styled.main`
    flex: 1 0 auto;
    position: relative;
    background: linear-gradient(to top left, rgba(255, 205, 72, 1) 50%, rgba(255, 173, 100, 1) 50% );
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
