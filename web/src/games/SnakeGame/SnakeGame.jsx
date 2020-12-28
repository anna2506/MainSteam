import React from 'react';
import * as Styled from './styled';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const SnakeGame = () => (
  <Styled.Content>
    <Navbar />
    <Styled.Main>
      <Styled.Container />
    </Styled.Main>
    <Footer />
  </Styled.Content>
);

export default SnakeGame;
