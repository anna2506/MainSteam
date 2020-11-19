import React, {PureComponent} from "react";
import * as Styled from "./styled";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import mainImage from "../assets/mainPagePic.svg";


class MainPage extends PureComponent {
    render() {
        return (
            <Styled.mainPageContainer>
                <Navbar/>
                <Styled.contentContainer>
                    <Styled.mainPageContent>
                        <Styled.typography>New gaming era <br />Coming soon!</Styled.typography>
                        <Styled.loginButton>Sign In</Styled.loginButton>
                        <Styled.imageContainer><Styled.mainPageImage src={mainImage}/></Styled.imageContainer>
                    </Styled.mainPageContent>
                </Styled.contentContainer>
                <Footer/>
            </Styled.mainPageContainer>
        )
    }
}

export default MainPage;
