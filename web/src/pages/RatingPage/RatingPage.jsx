import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Styled from './styled';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import * as playerSelectors from '../../store/player/selector';
import * as playerActions from '../../store/player/actions';
import RatingBanner from '../../assets/ratingBanner.webp';

const RatingPage = () => {
  let place = 0;
  const dispatch = useDispatch();
  const countries = useSelector((state) => playerSelectors.getCountries(state));
  const rating = useSelector((state) => playerSelectors.getRating(state));

  useEffect(() => {
    dispatch(playerActions.getPlayer());
    dispatch(playerActions.getCountries());
    dispatch(playerActions.getRating());
  }, []);

  const countryData = (player) => {
    return countries.find((country) => country.name === player.country);
  }

  const ratingList = Object.values(rating).map((playerInfo) => {
    place += 1;
    return (
      <Styled.Card>
        <Styled.Place>#{place}</Styled.Place>
        {countryData(playerInfo) && <Styled.Country src={countryData(playerInfo).flag} />}
        <Styled.Nickname href="#">{playerInfo.login}</Styled.Nickname>
      </Styled.Card>
    )
  });

  return (
    <Styled.Content>
      <Navbar />
      <Styled.Main>
        <Styled.Container>
          <Styled.OverallRating>
            {ratingList}
          </Styled.OverallRating>
          <Styled.BannerPlace>
            <Styled.Banner src={RatingBanner} />
          </Styled.BannerPlace>
        </Styled.Container>
      </Styled.Main>
      <Footer />
    </Styled.Content>
  );
};

export default RatingPage;
