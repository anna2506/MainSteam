import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as Eye } from '../assets/eye-open.svg';
import { ReactComponent as EyeClosed } from '../assets/eye-closed.svg';

const Label = styled.label`
  text-align: left;
  font-size: 16pt;
  width: 100%;
  margin-bottom: 5px;
  font-weight: bold;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex: 1;
  margin-bottom: 15px;
  position: relative;
  max-height: 61px;
`;
const Input = styled.input`
  flex: 1;
  height: 25px;
  font-size: 14pt;
  position: relative;
  box-sizing: content-box;
`;

const PassShowButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  right: 10px;
  bottom: 0px;
  outline: none;
  cursor: pointer;
`;

function TextInput(props) {
  const {
    name,
    type,
    onChange,
    value,
  } = props;
  const [passShow, setPassShow] = useState(false);
  if (type === 'password') {
    const inputType = passShow ? 'text' : 'password';
    return (
      <Wrapper>
        <Label htmlFor={name}>
          {name}
        </Label>
        <Input
          id={name}
          type={inputType}
          onChange={onChange}
          value={value}
        />
        {passShow
          ? (
            <PassShowButton type="button" onClick={() => setPassShow(false)}>
              <Eye />
            </PassShowButton>
          )
          : (
            <PassShowButton type="button" onClick={() => setPassShow(true)}>
              <EyeClosed />
            </PassShowButton>
          )}
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Label htmlFor={name}>
        {name}
      </Label>
      <Input
        id={name}
        type={type}
        onChange={onChange}
        value={value}
      />
    </Wrapper>
  );
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

TextInput.defaultProps = {
  type: 'text',
  onChange: (() => {}),
  value: '',
};
export default TextInput;
