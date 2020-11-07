import React, {PureComponent} from "react";
import {AppBar, Toolbar, Button,Dialog, DialogTitle, DialogContent} from "@material-ui/core";
import * as Styled from "./styled";
import SignIn from "../SignIn";
import SignUp from "../SignUp";

const Navbar = () => {
        const [signInIsOpen, setSignInIsOpen] = React.useState(false);
        const [signUpIsOpen, setSignUpIsOpen] = React.useState(false);

        const handleClickOpenSignIn = () => {
            setSignInIsOpen(true);
        };

        const handleClickClose = () => {
            setSignInIsOpen(false);
            setSignUpIsOpen(false);
        };

        const handleClickOpenSignUp = () => {
            setSignUpIsOpen(true);
        }

        return (
            <Styled.container>
                <Styled.navContainer>
                    <AppBar position="fixed" style={{
                        background: "linear-gradient(180deg, #C87D37 22.92%, rgba(255, 173, 100, 0) 100%), #FFAD64",
                        height: "84px",
                        boxShadow: "none"
                    }}>
                        <Toolbar>
                            <Button onClick={handleClickOpenSignIn}>Login</Button>
                            <Dialog onClose={handleClickClose} open={signInIsOpen}>
                                <DialogTitle>
                                    <Button>Sign In</Button>
                                    <Button onClick={handleClickOpenSignUp}>Sign Up</Button>
                                    <Dialog onClose={handleClickClose} open={signUpIsOpen}>
                                        <DialogTitle>
                                            <Button onClick={handleClickOpenSignIn}>Sign In</Button>
                                            <Button>Sign Up</Button>
                                        </DialogTitle>
                                        <DialogContent>
                                            <SignUp />
                                        </DialogContent>
                                    </Dialog>
                                </DialogTitle>
                                <DialogContent>
                                    <SignIn />
                                </DialogContent>
                            </Dialog>
                            <Styled.buttonsWrapper>
                                <Styled.buttonNav>Home</Styled.buttonNav>
                                <Styled.buttonNav>Rating</Styled.buttonNav>
                                <Styled.buttonNav>Store</Styled.buttonNav>
                            </Styled.buttonsWrapper>
                        </Toolbar>
                    </AppBar>
                </Styled.navContainer>
            </Styled.container>
        )
};

export default Navbar;
