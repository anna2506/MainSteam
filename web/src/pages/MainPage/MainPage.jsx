import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import * as playerSelectors from '../../store/player/selector';
import * as Styled from './styled';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import mainImage from '../../assets/mainPagePic.svg';
import RegisterModal from '../../components/RegisterModal';

const MainPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const isLoggedIn = useSelector((state) => playerSelectors.isLoggedIn(state));
  return (
    <>
      <RegisterModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <Styled.Content>
        <Navbar />
        <Styled.Main>
          <Styled.Container>
            <Styled.Title>
              New gaming era
              <br />
              Coming soon!
            </Styled.Title>
            <Styled.ButtonContainer>
              <Styled.SignInButton
                onClick={() => setModalOpen(true)}
                hide={isLoggedIn}
              >
                Sign In
              </Styled.SignInButton>
            </Styled.ButtonContainer>
            <Styled.ImageContainer>
              <Styled.Image src={mainImage} />
            </Styled.ImageContainer>
          </Styled.Container>
        </Styled.Main>
        <Footer />
      </Styled.Content>
    </>
  );
};

export default MainPage;
