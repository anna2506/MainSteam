import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import * as gamesSelector from '../../store/game/selector';
import * as gamesActions from '../../store/game/actions';
import * as Styled from './styled';
import SnakeGameSvg from '../../assets/snake-game.png';
import useActions from "../../helpers/useActions";

const Library = () => {
    const games = useSelector((state) => gamesSelector.getGames(state));
    const getGames = useActions(gamesActions.getGames);

    useEffect(() => {
        getGames();
    }, []);

    const components = Object.values(games)
        .map(game =>
        <Styled.Card key={game.id}>
            <Styled.Image src={SnakeGameSvg}/>
            <Styled.LinkContainer>
                <Styled.Link>{game.name}</Styled.Link>
            </Styled.LinkContainer>
        </Styled.Card>);

    return (
        <Styled.Container>
            <Styled.CardsHeader>LIBRARY</Styled.CardsHeader>
            {components}
        </Styled.Container>
    )};

export default Library;
