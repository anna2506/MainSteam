import React, {PureComponent} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import * as Styled from "./styled";
import mainImage from "./mainPagePic.svg";


class MainPage extends PureComponent {
    render() {
        return (
            <Styled.mainPageContainer>
                <Navbar/>
                <Styled.contentContainer>
                    <Styled.mainPageContent>
                        <Styled.imageContainer><Styled.mainPageImage src={mainImage}/></Styled.imageContainer>
                    </Styled.mainPageContent>
                </Styled.contentContainer>
                <Footer/>
            </Styled.mainPageContainer>
        )
    }
}

export default MainPage;
