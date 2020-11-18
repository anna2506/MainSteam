import React from "react";
import * as Styled from "./styled";

const Navbar = () => {
        return (
            <Styled.container>
                <Styled.navContainer>
                    <Styled.ul>
                        <li className="login">Login</li>
                        <li>Home</li>
                        <li>Rating</li>
                        <li>Store</li>
                    </Styled.ul>
                </Styled.navContainer>
            </Styled.container>
        )
};

export default Navbar;
