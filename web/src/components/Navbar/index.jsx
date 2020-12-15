import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import * as Styled from './styled';
import RegisterModal from '../RegisterModal';
import * as userSelectors from '../../store/player/selector';
import * as userActions from '../../store/player/actions';
import useActions from '../../helpers/useActions';

const Navbar = ({bg, linkColor}) => {
      const [modalOpen, setModalOpen] = useState(false);
      const isLoggedIn = useSelector((state) => userSelectors.isLoggedIn(state));
      const logOut = useActions(userActions.logout);
      return (
          <>
            <RegisterModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
            <Styled.Header bg={bg}>
              <Styled.Container>
                {isLoggedIn
                    ? (
                        <Styled.LoginButton linkColor={linkColor} onClick={logOut}>
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
                  {isLoggedIn &&
                  <Styled.Li><Styled.StyledLink linkColor={linkColor} to="/profile">PROFILE</Styled.StyledLink></Styled.Li>}
                </Styled.Ul>
              </Styled.Container>
            </Styled.Header>
          </>
      );
};

Navbar.propTypes = {
    bg: PropTypes.string,
    linkColor: PropTypes.string,
}

Navbar.defaultProps = {
    bg: "linear-gradient(180deg, #C87D37 22.92%, #FFAD64 100%)",
    linkColor: "#1d1d1d",
}

export default Navbar;
