import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import * as Styled from './styled';
import RegisterModal from '../RegisterModal';
import * as userSelectors from '../../store/player/selector';
import * as userActions from '../../store/player/actions';
import useActions from '../../helpers/useActions';

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const isLoggedIn = useSelector((state) => userSelectors.isLoggedIn(state));
  const logOut = useActions(userActions.logout);
  return (
    <>
      <RegisterModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <Styled.Header>
        <Styled.Container>
          {isLoggedIn
            ? (
              <Styled.LoginButton onClick={logOut}>
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
            <Styled.Li><Styled.StyledLink to="/ReduxTest">REDUX TEST</Styled.StyledLink></Styled.Li>
          </Styled.Ul>
        </Styled.Container>
      </Styled.Header>
    </>
  );
};

export default Navbar;
