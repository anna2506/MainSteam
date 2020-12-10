import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MyButton = styled.button`
  background-color: white;
  color: black;
  :hover {
    background-color: #8383e3;
    color: white;
  }
  border: 3px solid #8383e3;
  transition: 0.3s ease;
  border-radius: 20px;
  height: 40px;
  min-width: 150px;
  font-size: 14pt;
  font-weight: bold;
  outline: none;
  cursor: pointer;
`;

function Button(props) {
  const { name, type, onClick } = props;
  return (
    <MyButton type={type} onClick={onClick}>
      {name}
    </MyButton>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  onClick: (() => {}),
};

export default Button;
