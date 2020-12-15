import React, {useEffect} from 'react';
import styled from 'styled-components';
import Layout from '../Layout';
import GameCard from './GameCard';
import SnakeGameSvg from '../../assets/snake-game.png';
import PacmanGameSvg from '../../assets/pacman-game.png';
import {useSelector} from 'react-redux';
import * as playerSelectors from '../../store/player/selector';
import useActions from '../../helpers/useActions';
import * as playerActions from '../../store/player/actions';
import * as gamesSelector from '../../store/game/selector';
import * as gamesActions from '../../store/game/actions';

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

const Store = () => {
    const player = useSelector((state) => playerSelectors.getPlayerInfo(state));
    const games = useSelector((state) => gamesSelector.getGames(state));
    const [getPlayer, getGames] = useActions([playerActions.getPlayer, gamesActions.getGames]);

    useEffect(() => {
        getPlayer();
        getGames();
    }, []);

    const components = Object.values(games)
        .map(game => <GameCard imageSrc={SnakeGameSvg} key={game.id} isLocked />);

    return (
        <Layout color="linear-gradient(to top left, rgba(2, 1, 199, 1) 50%, rgba(131, 131, 227, 1) 50% )"
              bg="linear-gradient(180deg, #5156B0 22.92%, #8383E3 100%)" linkColor="#FFCD48">
        <WelcomeText>
          {/* TODO: get username from state */}
          Hello, {player.login}! Would you like to play some game today?
        </WelcomeText>
        <Content>
            {components}
        </Content>
        </Layout>
)};

export default Store;
