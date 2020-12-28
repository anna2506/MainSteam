import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
        <Styled.Image src="https://demotivation.ru/wp-content/uploads/2020/01/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_3840x2400-scaled.jpg" />
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
