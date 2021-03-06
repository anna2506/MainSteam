import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Styled from './styled';
import RegisterModal from '../RegisterModal';
import * as playerSelectors from '../../store/player/selector';
import * as playerActions from '../../store/player/actions';

const Navbar = () => {
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
      <Styled.Header>
        <Styled.Container>
          {isLoggedIn
            ? (
              <Styled.LoginButton onClick={() => dispatch(playerActions.logout())}>
                LOGOUT
              </Styled.LoginButton>
            )
            : (
              <Styled.LoginButton onClick={() => setModalOpen(true)}>
                LOGIN
              </Styled.LoginButton>
            )}
          <Styled.Ul>
            <Styled.Li><Styled.StyledLink to="/">HOME</Styled.StyledLink></Styled.Li>
            <Styled.Li><Styled.StyledLink to="/rating">RATING</Styled.StyledLink></Styled.Li>
            <Styled.Li><Styled.StyledLink to="/store">STORE</Styled.StyledLink></Styled.Li>
            {player.login
            && (
            <Styled.Li>
              <Styled.StyledLink to="/profile">
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

export default Navbar;
