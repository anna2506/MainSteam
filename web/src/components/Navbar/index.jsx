import React from 'react';
import * as Styled from './styled';

const Navbar = () => {
        return (
            <Styled.Header>
                <Styled.Container>
                    <Styled.LoginButton>
                        LOGIN
                    </Styled.LoginButton>
                    <Styled.Ul>
                        <Styled.Li><Styled.Link href="#">HOME</Styled.Link></Styled.Li>
                        <Styled.Li><Styled.Link href="#">RATING</Styled.Link></Styled.Li>
                        <Styled.Li><Styled.Link href="#">STORE</Styled.Link></Styled.Li>
                    </Styled.Ul>
                </Styled.Container>
            </Styled.Header>
        )
};

export default Navbar;
