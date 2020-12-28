import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Styled from './styled';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import * as playerSelectors from '../../store/player/selector';
import * as playerActions from '../../store/player/actions';

const RatingPage = () => {
  const dispatch = useDispatch();
  const player = useSelector((state) => playerSelectors.getPlayerInfo(state));
  const countries = useSelector((state) => playerSelectors.getCountries(state));

  useEffect(() => {
    dispatch(playerActions.getPlayer());
    dispatch(playerActions.getCountries());
  }, []);

  const countryData = countries.find((country) => country.name === player.country);

  return (
    <Styled.Content>
      <Navbar />
      <Styled.Main>
        <Styled.Container>
          <Styled.OverallRating>
            <Styled.Card>
              <Styled.Place>#1</Styled.Place>
              {countryData && <Styled.Country src={countryData.flag} />}
              <Styled.Nickname href="#">{player.login}</Styled.Nickname>
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
};

export default RatingPage;
