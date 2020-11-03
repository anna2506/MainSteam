import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'react-responsive-modal/styles.css';
import Modal from 'react-responsive-modal';
import styled from 'styled-components';
import { ReactComponent as CrossSvg } from '../../assets/cross.svg';

const Header = styled.div`
  height: 50px;
  display: flex;
  flex: 2;
  padding: 24px 25px 0 50px;
  flex-direction: row;
  border-bottom: 3px solid blue;
  justify-content: space-between;
`;

const Text = styled.button`
  margin: 0;
  border-radius: 5px;
  background: none;
  border: none;
  font-size: 16pt;
  color: ${(props) => (props.selected ? 'blue' : 'black')};
`;

const Content = styled.form`
  display: flex;
  flex: 1;
  padding: 24px 50px;
`;

function RegisterModal(props) {
  const { isOpen, onClose } = props;
  const [step, setStep] = useState('LogIn');
  const styles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    modal: {
      maxWidth: '600px',
      padding: '0',
      borderRadius: '15px',
      display: 'flex',
      flex: 1,
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      styles={styles}
      center
      showCloseIcon={false}
    >
      <Header>
        <div>
          <Text
            selected={step === 'LogIn'}
            onClick={() => setStep('LogIn')}
          >
            Войти
          </Text>
          <Text
            selected={step === 'Register'}
            onClick={() => setStep('Register')}
          >
            Регистрация
          </Text>
        </div>
        <CrossSvg onClick={onClose} />
      </Header>
      <Content>To be continued...</Content>
    </Modal>
  );
}

RegisterModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

RegisterModal.defaultProps = {
  isOpen: false,
  onClose: (() => {}),
};

export default RegisterModal;
