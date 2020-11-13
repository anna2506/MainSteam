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
  padding: 25px 30px 0;
  flex-direction: row;
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
  position: relative;
  :hover { color: #ffec00; }
  span {
    position: absolute;
    bottom: -26px;
    left: calc(50% - 10px);
    width: 0;
    height: 0; 
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 15px solid white;
  }
`;

const Content = styled.div`
  padding: 20px 20px;
  height: ${(props) => (props.isLogin ? '200px' : '350px')};
  overflow: hidden;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
`;

const Cross = styled(CrossSvg)`
  fill: white;
  cursor: pointer;
  :hover { fill: #ffec00; }
  margin-top: 5px;
`;

function RegisterModal(props) {
  const { isOpen, onClose } = props;
  const [step, setStep] = useState('LogIn');
  const styles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      zIndex: 10000,
    },
    modal: {
      maxWidth: '450px',
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
            {step === 'LogIn' && <span />}
          </Text>
          <Text
            selected={step === 'Register'}
            onClick={() => setStep('Register')}
          >
            Регистрация
            {step === 'Register' && <span />}
          </Text>
        </div>
        <Cross onClick={onClose} />
      </Header>
      <Content isLogin={step === 'LogIn'}>
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
