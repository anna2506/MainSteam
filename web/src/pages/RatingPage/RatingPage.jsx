import React from 'react';
import * as Styled from './styled';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import UnitedKingdom from '../../assets/united-kingdom.svg';

const RatingPage = () => (
  <Styled.Content>
    <Navbar />
    <Styled.Main>
      <Styled.Container>
        <Styled.OverallRating>
          <Styled.Card>
            <Styled.Place>#1</Styled.Place>
            <Styled.Country src={UnitedKingdom} />
            <Styled.Nickname href="#">Nickname</Styled.Nickname>
          </Styled.Card>
        </Styled.OverallRating>
        <Styled.PeopleByRating>
          <Styled.PeopleByRatingTitle>RATING</Styled.PeopleByRatingTitle>
        </Styled.PeopleByRating>
      </Styled.Container>
    </Styled.Main>
    <Footer />
  </Styled.Content>
);

export default RatingPage;
