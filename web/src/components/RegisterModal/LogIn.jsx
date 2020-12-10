import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TextInput from '../TextInput';
import Button from '../Button';
import useActions from '../../helpers/useActions';
import * as playerActions from '../../store/player/actions';

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  max-height: 240px;
`;

function LogIn(props) {
  const { closeModal } = props;
  const [logIn] = useActions([playerActions.logIn]);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    if (login && password) logIn(login, password).then(() => closeModal());
    // eslint-disable-next-line no-console
    else console.error('Логин или пароль пустые');
  };

  return (
    <Form
      onSubmit={(event) => onSubmit(event)}
    >
      <TextInput
        name="Login"
        value={login}
        onChange={(event) => setLogin(event.target.value)}
      />
      <TextInput
        name="Password"
        value={password}
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <ButtonWrapper>
        <Button
          name="Log In"
          type="submit"
        />
      </ButtonWrapper>
    </Form>
  );
}

LogIn.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default LogIn;
