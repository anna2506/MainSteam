import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// 77.63px - NavBar, 84.63px - Footer
const Background = styled.div`
  background: ${(props) => props.color};
  min-height: calc(100% - 77.63px - 84.63px);
  padding: 20px 0;
`;

function Layout({ children, color, bg, linkColor }) {
  return (
    <>
      <Navbar bg={bg} linkColor={linkColor}/>
      <Background color={color}>
        {children}
      </Background>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

Layout.defaultProps = {
  color: '#FFAD64',
};

export default Layout;
