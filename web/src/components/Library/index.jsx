import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import * as gamesSelector from '../../store/game/selector';
import * as gamesActions from '../../store/game/actions';
import * as Styled from './styled';

const Library = () => {
  const dispatch = useDispatch();
  const games = useSelector((state) => gamesSelector.getGames(state));

  useEffect(() => {
    dispatch(gamesActions.getGames());
  }, []);

  const components = Object.values(games)
    .map((game) => (
      <Styled.Card key={game.id}>
        <Styled.Image src={`${axios.defaults.baseURL}/game/${game.name}/image/logo`} />
        <Styled.LinkContainer>
          <Styled.Link>{game.name}</Styled.Link>
        </Styled.LinkContainer>
      </Styled.Card>
    ));

  return (
    <Styled.Container>
      <Styled.CardsHeader>LIBRARY</Styled.CardsHeader>
      {components}
    </Styled.Container>
  );
};

export default Library;
