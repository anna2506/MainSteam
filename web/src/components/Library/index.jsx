import React from 'react';
import * as Styled from './styled';
import Game1 from '../../assets/game1.png';

const Library = ( ) => {
    return (
        <Styled.Container>
            <Styled.CardsHeader>LIBRARY</Styled.CardsHeader>
            <Styled.Card>
                <Styled.Image src={Game1}/>
                <Styled.LinkContainer>
                    <Styled.Link>SHERLOCK HOLMES</Styled.Link>
                </Styled.LinkContainer>
            </Styled.Card>
            <Styled.Card>
                <Styled.Image src={Game1}/>
                <Styled.LinkContainer>
                    <Styled.Link>SHERLOCK HOLMES</Styled.Link>
                </Styled.LinkContainer>
            </Styled.Card>
            <Styled.Card>
                <Styled.Image src={Game1}/>
                <Styled.LinkContainer>
                    <Styled.Link>SHERLOCK HOLMES</Styled.Link>
                </Styled.LinkContainer>
            </Styled.Card>
        </Styled.Container>
    )
};

export default Library;
