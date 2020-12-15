import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useActions from '../helpers/useActions';
import Layout from './Layout';
import Button from '../components/Button';
import * as GameActions from '../store/game/actions';
import * as GameSelectors from '../store/game/selector';
import * as PlayerActions from '../store/player/actions';
import * as PlayerSelectors from '../store/player/selector';
import * as PlayerGameActions from '../store/playerGame/actions';
import * as PlayerGameSelectors from '../store/playerGame/selector';

const Block = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const Store = () => {
  // actions
  const [
    getGame,
    getGames,
    getPlayer,
    updatePlayer,
    getRating,
    getPlayerGames,
    updatePlayerGame,
  ] = useActions([
    GameActions.getGame,
    GameActions.getGames,
    PlayerActions.getPlayer,
    PlayerActions.updatePlayer,
    PlayerActions.getRating,
    PlayerGameActions.getPlayerGames,
    PlayerGameActions.updatePlayerGame,
  ]);

  // selectors
  const game = useSelector(GameSelectors.getGame);
  const games = useSelector(GameSelectors.getGames);
  const player = useSelector(PlayerSelectors.getPlayerInfo);
  const rating = useSelector(PlayerSelectors.getRating);
  const playerGames = useSelector(PlayerGameSelectors.getPlayerGames);

  return (
    <Layout color="#8383e3">
      <Block>
        GET /games/1
        <Button name="Send" onClick={() => getGame(1)} />
        {JSON.stringify(game)}
      </Block>
      <Block>
        GET /games
        <Button name="Send" onClick={() => getGames()} />
        {JSON.stringify(games)}
      </Block>
      <Block>
        GET /player
        <Button name="Send" onClick={() => getPlayer()} />
        PUT /player
        <Button
          name="Update"
          onClick={() => updatePlayer({
            country: 'Russian Federation',
            experience: 100,
            login: 'peachy',
            email: 'peach@gmail.com',
          })}
        />
        {JSON.stringify(player)}
      </Block>
      <Block>
        GET /rating
        <Button name="Send" onClick={() => getRating()} />
        {JSON.stringify(rating)}
      </Block>
      <Block>
        GET /playerGames
        <Button name="Send" onClick={() => getPlayerGames()} />
        POST /playerGames
        <Button
          name="Update"
          onClick={() => updatePlayerGame({
            gameId: 1,
            timeSpent: 100,
            highScore: 0,
            beat100: false,
            beat200: false,
            beat400: false,
            beat700: false,
            beat1000: false,
            beat10000: false,
          })}
        />
        {JSON.stringify(playerGames)}
      </Block>
    </Layout>
  );
};

export default Store;
