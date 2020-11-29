import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TextInput from '../TextInput';
import Button from '../Button';
import useActions from '../../helpers/useActions';
import * as userActions from '../../store/user/actions';

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
  max-height: 345px;
`;

function Register(props) {
  const { closeModal } = props;
  const [register] = useActions([userActions.register]);
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    if (login && password && password2 && email && password === password2) {
      register(login, email, password).then(() => closeModal());
    } else if (password !== password2) {
      // eslint-disable-next-line no-console
      console.error('Пароли не совпадают');
    } else {
      // eslint-disable-next-line no-console
      console.error('Одно из полей пустое');
    }
  };
  return (
    <Form onSubmit={(event) => onSubmit(event)}>
      <TextInput
        name="Email*"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextInput
        name="Login*"
        value={login}
        onChange={(event) => setLogin(event.target.value)}
      />
      <TextInput
        name="Password*"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <TextInput
        name="Repeat password*"
        type="password"
        value={password2}
        onChange={(event) => setPassword2(event.target.value)}
      />
      <ButtonWrapper>
        <Button
          name="Register"
          type="submit"
        />
      </ButtonWrapper>
    </Form>
  );
}

Register.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default Register;
