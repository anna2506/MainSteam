import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import * as playerActions from '../store/player/actions';
import * as playerSelectors from '../store/player/selector';

const Input = styled.input`
  flex: 1;
  height: 25px;
  font-size: 14pt;
  position: relative;
  box-sizing: content-box;
  border: 1px solid ${(props) => (props.error ? 'red' : 'black')};
  ::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

function CountryInput(props) {
  const { onChange, value } = props;
  const dispatch = useDispatch();
  const countries = useSelector(playerSelectors.getCountriesNames);
  const [error, setError] = useState('');

  useEffect(() => {
    dispatch(playerActions.getCountries());
  }, [dispatch]);

  const handleBlur = () => {
    if (!countries.includes(value)) {
      setError('Country not found');
    } else {
      setError('');
    }
  };

  return (
    <>
      <Input
        onChange={onChange}
        value={value}
        list="countries"
        error={error}
        onBlur={handleBlur}
      />
      <datalist id="countries">
        {countries.map((x) => <option key={x} value={x} />)}
      </datalist>
    </>
  );
}

CountryInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default CountryInput;
