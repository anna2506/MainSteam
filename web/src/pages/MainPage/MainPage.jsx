import React, {PureComponent} from 'react';
import * as Styled from './styled';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import mainImage from '../../assets/mainPagePic.svg';


const MainPage = () => {
        return (
            <Styled.Content>
                <Navbar />
                <Styled.Main>
                    <Styled.Container>
                        <Styled.Title>New gaming era <br />Coming soon!</Styled.Title>
                        <Styled.ButtonContainer>
                            <Styled.SignInButton>Sign In</Styled.SignInButton>
                        </Styled.ButtonContainer>
                        <Styled.ImageContainer>
                            <Styled.Image src={mainImage} />
                        </Styled.ImageContainer>
                    </Styled.Container>
                </Styled.Main>
                <Footer />
            </Styled.Content>
        )
}

export default MainPage;
