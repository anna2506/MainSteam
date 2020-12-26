import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Layout from '../Layout';
import GameCard from './GameCard';
import * as playerSelectors from '../../store/player/selector';
import * as gameSelectors from '../../store/game/selector';
import * as playerActions from '../../store/player/actions';
import * as gameActions from '../../store/game/actions';

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

function Store() {
  const dispatch = useDispatch();
  const login = useSelector(playerSelectors.getPlayerName);
  const level = useSelector(playerSelectors.getLevel);
  const games = useSelector(gameSelectors.getGames);

  useEffect(() => {
    dispatch(playerActions.getPlayer());
    dispatch(gameActions.getGames());
  }, [dispatch]);

  return (
    <Layout color="#8383e3">
      <WelcomeText>
        Hello,
        {' '}
        {login}
        ! Your level is
        {' '}
        {level}
      </WelcomeText>
      <Content>
        {games.map((game) => (
          <GameCard
            key={game.id}
            imageSrc={`${axios.defaults.baseURL}/game/${game.name}/image/logo`}
            isLocked={game.id > level}
          />
        ))}
      </Content>
    </Layout>
  );
}

export default Store;
