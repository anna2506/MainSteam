import React, {useEffect} from 'react';
import styled from 'styled-components';
import Layout from './Layout';
import SnakeGameSvg from '../assets/snake-game.png';
import Button from '../components/Button';
import {useSelector} from 'react-redux';
import useActions from "../helpers/useActions";
import * as gamesSelector from '../store/game/selector';
import * as gamesActions from '../store/game/actions';
import * as playerActions from "../store/player/actions";


const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  max-width: 800px;
  margin: auto;
  justify-content: space-around;
  flex: 1;
  padding: 20px 0 0;
  img { padding: 10px; }
  button:hover { background-color: #0201c7; }
`;

const Description = styled.p`
  font-weight: bold;
  font-size: 18pt;
  text-align: center;
  margin: 20px;
`;

const Store = () => {
    const game = useSelector((state) => gamesSelector.getGame(state));
    const [getPlayer, getGame] = useActions([playerActions.getPlayer, gamesActions.getGame]);

    useEffect(() => {
        getGame(1);
    }, []);

    return (
      <Layout color="linear-gradient(to top left, rgba(2, 1, 199, 1) 50%, rgba(131, 131, 227, 1) 50% )"
              bg="linear-gradient(180deg, #5156B0 22.92%, #8383E3 100%)" linkColor="#FFCD48">
        <Content>
          <img src={SnakeGameSvg} alt=" " />
          <Button name="Play" />
        </Content>
        <Description>
          {game.description}
        </Description>
      </Layout>
)};

export default Store;
