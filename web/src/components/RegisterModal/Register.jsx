import React from 'react';
import styled from 'styled-components';
import TextInput from '../TextInput';
import Button from '../Button';

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

function Register() {
  return (
    <Form>
      <TextInput name="Email*" />
      <TextInput name="Логин*" />
      <TextInput name="Пароль*" type="password" />
      <TextInput name="Повторите пароль*" type="password" />
      <ButtonWrapper>
        <Button
          name="Регистрация"
          type="submit"
        />
      </ButtonWrapper>
    </Form>
  );
}

export default Register;
