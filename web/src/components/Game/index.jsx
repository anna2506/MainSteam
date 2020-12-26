import React, { useState } from 'react';
import styled from 'styled-components';
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
`;

const Text = styled.div`
  position: absolute;
  color: black;
  top: -50px;
  left: 50%;
  transform: translate(-50%);
  font-size: 25pt;
`;

function Game() {
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
        <Text>
          Score:
          {' '}
          {score}
        </Text>
        {configuration
          ? (
            <GameArea>
              <Snake
                config={configuration}
                onGameOver={() => setConfiguration(null)}
                onScoreChanged={setScore}
                score={score}
              />
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

export default Game;
