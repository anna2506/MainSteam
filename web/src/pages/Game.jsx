import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Layout from './Layout';
import Button from '../components/Button';
import * as gameSelectors from '../store/game/selector';
import * as gameActions from '../store/game/actions';
import * as playerGameActions from '../store/playerGame/actions';
import * as playerGameSelectors from '../store/playerGame/selector';
import Game from '../components/Game';

const Content = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  max-width: 800px;
  margin: auto;
  justify-content: space-around;
  flex: 1;
  padding: 20px 0 0;
  button:hover { background-color: #0201c7; }
`;

const Image = styled.img`
  padding: 10px;
  width: 100%;
  ${(props) => !props.show && 'display: none;'}
  cursor: pointer;
`;

const Description = styled.p`
  font-weight: bold;
  font-size: 18pt;
  text-align: center;
  margin: 20px;
`;

function Store(props) {
  // TODO: update playerGame
  // TODO: gameOver screen + handleGameOver
  const { match } = props;
  const { gameId } = match.params;
  const images = [0, 1, 2];
  const [imageToShow, setImageToShow] = useState(1);
  const [play, setPlay] = useState(false);

  const dispatch = useDispatch();
  const game = useSelector(gameSelectors.getGame);
  const playerGame = useSelector((state) => playerGameSelectors.getPlayerGame(state, gameId));

  useEffect(() => {
    dispatch(gameActions.getGame(gameId));
    dispatch(playerGameActions.getPlayerGames());
  }, [dispatch, gameId]);

  if (play) {
    return (
      <Layout color="#8383e3">
        <Game
          name={game.name}
          onClose={() => setPlay(false)}
          highScore={playerGame.highScore}
        />
      </Layout>
    );
  }

  return (
    <Layout color="#8383e3">
      <Content>
        {game.name && images.map((x) => (
          <Image
            src={`${axios.defaults.baseURL}/game/${game.name}/image/${x + 1}`}
            alt=" "
            key={x}
            onClick={() => setImageToShow((imageToShow + 1) % 3)}
            show={imageToShow === x}
          />
        ))}
      </Content>
      <Description>
        {game.description}
      </Description>
      <Content>
        <Button name="Play" onClick={() => setPlay(true)} />
      </Content>
    </Layout>
  );
}

Store.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      gameId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Store;
