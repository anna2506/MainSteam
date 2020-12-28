import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import * as Styled from './styled';
import RegisterModal from '../RegisterModal';
import * as playerSelectors from '../../store/player/selector';
import * as playerActions from '../../store/player/actions';

const Navbar = ({ bg, linkColor }) => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const isLoggedIn = useSelector(playerSelectors.isLoggedIn);
  const player = useSelector(playerSelectors.getPlayerInfo);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(playerActions.getPlayer());
    }
  }, [dispatch, isLoggedIn]);
  return (
    <>
      <RegisterModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <Styled.Header bg={bg}>
        <Styled.Container>
          {isLoggedIn
            ? (
              <Styled.LoginButton
                linkColor={linkColor}
                onClick={() => dispatch(playerActions.logout())}
              >
                LOGOUT
              </Styled.LoginButton>
            )
            : (
              <Styled.LoginButton linkColor={linkColor} onClick={() => setModalOpen(true)}>
                LOGIN
              </Styled.LoginButton>
            )}
          <Styled.Ul>
            <Styled.Li><Styled.StyledLink linkColor={linkColor} to="/">HOME</Styled.StyledLink></Styled.Li>
            <Styled.Li><Styled.StyledLink linkColor={linkColor} to="/rating">RATING</Styled.StyledLink></Styled.Li>
            <Styled.Li><Styled.StyledLink linkColor={linkColor} to="/store">STORE</Styled.StyledLink></Styled.Li>
            {player.login
            && (
              <Styled.Li>
                <Styled.StyledLink linkColor={linkColor} to="/profile">
                  {player.login}
                </Styled.StyledLink>
              </Styled.Li>
            )}
          </Styled.Ul>
        </Styled.Container>
      </Styled.Header>
    </>
  );
};

Navbar.propTypes = {
  bg: PropTypes.string,
  linkColor: PropTypes.string,
};

Navbar.defaultProps = {
  bg: 'linear-gradient(180deg, #C87D37 22.92%, #FFAD64 100%)',
  linkColor: '#1d1d1d',
};

export default Navbar;
