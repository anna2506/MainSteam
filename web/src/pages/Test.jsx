import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Layout from './Layout';
import Button from '../components/Button';
import * as gameActions from '../store/game/actions';
import * as gameSelectors from '../store/game/selector';
import * as playerActions from '../store/player/actions';
import * as playerSelectors from '../store/player/selector';
import * as playerGameActions from '../store/playerGame/actions';
import * as playerGameSelectors from '../store/playerGame/selector';

const Block = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const Store = () => {
  const dispatch = useDispatch();

  // selectors
  const game = useSelector(gameSelectors.getGame);
  const games = useSelector(gameSelectors.getGames);
  const player = useSelector(playerSelectors.getPlayerInfo);
  const rating = useSelector(playerSelectors.getRating);
  const playerGames = useSelector(playerGameSelectors.getPlayerGames);

  return (
    <Layout color="#8383e3">
      <Block>
        GET /games/1
        <Button name="Send" onClick={() => dispatch(gameActions.getGame(1))} />
        {JSON.stringify(game)}
      </Block>
      <Block>
        GET /games
        <Button name="Send" onClick={() => dispatch(gameActions.getGames())} />
        {JSON.stringify(games)}
      </Block>
      <Block>
        GET /player
        <Button name="Send" onClick={() => dispatch(playerActions.getPlayer())} />
        PUT /player
        <Button
          name="Update"
          onClick={() => dispatch(playerActions.updatePlayer({
            country: 'Russia',
            experience: 100,
            login: 'Cherkasik3',
            email: 'cherkasik@gmail.com',
          }))}
        />
        {JSON.stringify(player)}
      </Block>
      <Block>
        GET /rating
        <Button name="Send" onClick={() => dispatch(playerActions.getRating())} />
        {JSON.stringify(rating)}
      </Block>
      <Block>
        GET /playerGames
        <Button name="Send" onClick={() => dispatch(playerGameActions.getPlayerGames())} />
        POST /playerGames
        <Button
          name="Update"
          onClick={() => dispatch(playerGameActions.updatePlayerGame({
            gameId: 1,
            timeSpent: 100,
            highScore: 0,
            beat100: false,
            beat200: false,
            beat400: false,
            beat700: false,
            beat1000: false,
            beat10000: false,
          }))}
        />
        {JSON.stringify(playerGames)}
      </Block>
    </Layout>
  );
};

export default Store;
