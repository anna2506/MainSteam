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
import * as playerActions from '../store/player/actions';
import * as playerSelectors from '../store/player/selector';
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

function GamePage(props) {
  const { match } = props;
  const { gameId } = match.params;
  const images = [0, 1, 2];
  const [imageToShow, setImageToShow] = useState(1);
  const [play, setPlay] = useState(false);

  const dispatch = useDispatch();
  const game = useSelector(gameSelectors.getGame);
  const playerGame = useSelector((state) => playerGameSelectors.getPlayerGame(state, gameId));
  const player = useSelector(playerSelectors.getPlayerInfo);

  useEffect(() => {
    dispatch(playerActions.getPlayer());
    dispatch(gameActions.getGame(gameId));
    dispatch(playerGameActions.getPlayerGames());
  }, [dispatch, gameId]);

  const handleGameOver = (score, timeSpent) => {
    const newPlayerGame = {
      gameId: parseInt(gameId, 10),
      timeSpent: playerGame.timeSpent + timeSpent,
      highScore: score > playerGame.highScore ? score : playerGame.highScore,
      beat100: score >= 100,
      beat200: score >= 200,
      beat400: score >= 400,
      beat700: score >= 700,
      beat1000: score >= 1000,
      beat10000: score >= 10000,
    };
    if (score > playerGame.highScore) {
      let experienceToAdd = 0;
      if (playerGame.highScore < 100 && score >= 100) {
        experienceToAdd += 100;
      }
      if (playerGame.highScore < 200 && score >= 200) {
        experienceToAdd += 200;
      }
      if (playerGame.highScore < 400 && score >= 400) {
        experienceToAdd += 400;
      }
      if (playerGame.highScore < 700 && score >= 700) {
        experienceToAdd += 700;
      }
      if (playerGame.highScore < 1000 && score >= 1000) {
        experienceToAdd += 1000;
      }
      if (playerGame.highScore < 10000 && score >= 10000) {
        experienceToAdd += 10000;
      }
      if (experienceToAdd !== 0) {
        dispatch(playerActions.updatePlayer({
          login: player.login,
          experience: player.experience + experienceToAdd,
          email: player.email,
          country: player.country,
        }));
      }
    }
    dispatch(playerGameActions.updatePlayerGame(newPlayerGame));
  };

  if (play) {
    return (
      <Layout color="#8383e3">
        <Game
          name={game.name}
          onClose={() => setPlay(false)}
          highScore={playerGame.highScore}
          onGameOver={handleGameOver}
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

GamePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      gameId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default GamePage;
