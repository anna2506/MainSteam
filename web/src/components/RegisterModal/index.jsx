import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'react-responsive-modal/styles.css';
import Modal from 'react-responsive-modal';
import styled from 'styled-components';
import { ReactComponent as CrossSvg } from '../../assets/cross.svg';
import LogIn from './LogIn';
import Register from './Register';

const Header = styled.div`
  height: 50px;
  display: flex;
  flex: 2;
  padding: 24px 25px 0 50px;
  flex-direction: row;
  border-bottom: 3px solid #0201c7;
  background-color: #8383e3;
  justify-content: space-between;
  border-radius: 15px 15px 0 0;
`;

const Text = styled.button`
  margin: 0;
  border-radius: 5px;
  background: none;
  border: none;
  font-size: 16pt;
  outline: none;
  color: ${(props) => (props.selected ? '#ffec00' : 'white')};
  cursor: pointer;
  :hover { color: #ffec00; }
`;

const Content = styled.div`
  padding: 24px 50px;
  min-height: 350px;
  display: flex;
  align-items: center;
`;

const Cross = styled(CrossSvg)`
  fill: white;
  cursor: pointer;
  :hover { fill: #ffec00; }
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
            Вход
          </Text>
          <Text
            selected={step === 'Register'}
            onClick={() => setStep('Register')}
          >
            Регистрация
          </Text>
        </div>
        <Cross onClick={onClose} />
      </Header>
      <Content>
        {step === 'LogIn'
          ? <LogIn />
          : <Register />}
      </Content>
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
