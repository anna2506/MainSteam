import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as CrossSvg } from '../../assets/cross.svg';
import Snake from './Snake';

const GameField = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  border: 5px solid black;
`;

const ChooseDifficulty = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: bisque;
`;

const DifficultyButton = styled.button`
  color: black;
  margin: 0 100px;
  border: none;
  border-radius: 20px;
  height: 50px;
  cursor: pointer;
  :hover {
    border: 2px solid purple;
  }
  ${(props) => {
    switch (props.children) {
      case 'easy':
        return 'background-color: lightgreen;';
      case 'normal':
        return 'background-color: #FDFA72;';
      case 'hard':
        return 'background-color: pink;';
      case 'expert':
        return 'background-color: red;';
      case 'expertPlus':
        return 'background-color: #B21E1E;';
      default:
        return 'background-color: default;';
    }
  }};
`;

const GameArea = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: white;
`;

const Score = styled.div`
  position: absolute;
  color: black;
  top: -50px;
  left: 50%;
  transform: translate(-50%);
  font-size: 25pt;
`;

const HighScore = styled(Score)`
  top: unset;
  bottom: -50px;
`;

const Cross = styled(CrossSvg)`
  fill: white;
  cursor: pointer;
  :hover { fill: #ffec00; }
  margin-top: 5px;
  position: absolute;
  right: 0;
  top: -50px;
`;

function Game(props) {
  const { name, onClose, highScore } = props;
  const [configuration, setConfiguration] = useState(null);
  const [score, setScore] = useState(0);
  const difficulties = {
    easy: {
      multiplier: 0.5,
      speed: 0.5,
    },
    normal: {
      multiplier: 1,
      speed: 1,
    },
    hard: {
      multiplier: 1.5,
      speed: 1.5,
    },
    expert: {
      multiplier: 2,
      speed: 2,
    },
    expertPlus: {
      multiplier: 3,
      speed: 3,
    },
  };

  const onConfigurationChange = (value) => {
    setScore(0);
    setConfiguration(value);
  };

  return (
    <>
      <GameField>
        <Score>
          Score:
          {' '}
          {score}
        </Score>
        <HighScore>
          High Score:
          {' '}
          {highScore}
        </HighScore>
        <Cross onClick={onClose} />
        {configuration
          ? (
            <GameArea>
              {name === 'Snake'
                ? (
                  <Snake
                    config={configuration}
                    onGameOver={() => setConfiguration(null)}
                    onScoreChanged={setScore}
                    score={score}
                  />
                )
                : 'Under development'}
            </GameArea>
          )
          : (
            <ChooseDifficulty>
              Choose the difficulty that matches you
              {Object.entries(difficulties)
                .map((x) => (
                  <DifficultyButton
                    onClick={() => onConfigurationChange({ ...x[1] })}
                    key={x[0]}
                  >
                    {x[0]}
                  </DifficultyButton>
                ))}
            </ChooseDifficulty>
          )}
      </GameField>
    </>
  );
}

Game.propTypes = {
  name: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  highScore: PropTypes.number.isRequired,
};

export default Game;
