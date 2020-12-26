import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ReactComponent as MagnifierSvg } from '../../assets/magnifier.svg';
import { ReactComponent as LockSvg } from '../../assets/lock.svg';

const Wrapper = styled(Link)`
    max-height: 250px;
    max-width: 380px;
    background: black;
    display: flex;
    margin: 5px;
    position: relative;
    border-radius: 30px;
    img {
      width: 100%;
      border-radius: 30px;
    }
    :hover {
      cursor: pointer;
      img {
        opacity: 0.4;
        filter: alpha(opacity=40) black;
        background-color: black;
      }
      div { display: flex; }
    }
`;

const SvgWrapper = styled.div`
  display: none;
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  z-index: 3;
  svg {
    width: 100px;
    height: 100px;
  }
`;

const GameCard = ({ imageSrc, isLocked }) => (
  <Wrapper to={isLocked ? '/store' : '/store/1'}>
    <img src={imageSrc} alt=" " />
    <SvgWrapper>
      {isLocked ? <LockSvg /> : <MagnifierSvg />}
    </SvgWrapper>
  </Wrapper>
);

GameCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  isLocked: PropTypes.bool,
};

GameCard.defaultProps = {
  isLocked: true,
};

export default GameCard;
