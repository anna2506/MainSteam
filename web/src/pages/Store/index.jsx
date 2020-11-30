import React from 'react';
import styled from 'styled-components';
import Layout from '../Layout';
import GameCard from './GameCard';
import SnakeGameSvg from '../../assets/snake-game.png';
import PacmanGameSvg from '../../assets/pacman-game.png';

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  max-width: 800px;
  margin: auto;
  justify-content: space-around;
  flex: 1 1;
  padding: 20px 0 0;
`;

const WelcomeText = styled.p`
  font-weight: bold;
  font-size: 18pt;
  text-align: center;
`;

const Store = () => (
  <Layout color="#8383e3">
    <WelcomeText>
      {/* TODO: get username from state */}
      Hello, Username! Would you like to play some game today?
    </WelcomeText>
    <Content>
      <GameCard imageSrc={SnakeGameSvg} isLocked={false} />
      <GameCard imageSrc={SnakeGameSvg} isLocked />
      <GameCard imageSrc={PacmanGameSvg} isLocked />
      <GameCard imageSrc={PacmanGameSvg} isLocked={false} />
    </Content>
  </Layout>
);

export default Store;
