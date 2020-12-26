import React, {
  useEffect, useState, useRef,
} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const STEP = 10;

const Dot = styled.div`
  position: absolute;
  width: ${STEP}%;
  height: ${STEP}%;
  background-color: black;
  border: 1px solid white;
  z-index: 1;
  ${(props) => `
    top: ${props.top}%;
    left: ${props.left}%;
  `}
`;

const Food = styled(Dot)`
  background-color: red;
  z-index: 0;
`;

function useInterval(callback, delay) {
  const savedCallback = useRef();
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return null;
  }, [delay]);
}

function Snake(props) {
  /*
  Функция взята тут https://gist.github.com/gordonbrander/2230317
  Она позволяет сгенерировать уникальный ID для элемента на основе перевода в 36-ричную систему
   */
  const generateId = () => Math.random().toString(36).substr(2, 9);

  const {
    config,
    onGameOver,
    onScoreChanged,
    score,
  } = props;

  const [snake, setSnake] = useState([
    { top: 0, left: 0 },
    { top: 0, left: 1 },
  ]);

  const getRandomCoordinates = () => {
    const min = 1;
    const max = (100 - STEP) / STEP;
    const x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    const y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    let coords = { top: y, left: x };
    let match = false;
    snake.forEach((dot) => {
      if (match) return;
      if (dot.left === coords.left && dot.top === coords.top) {
        match = true;
      }
    });
    if (match) {
      coords = getRandomCoordinates();
    }
    return coords;
  };

  const [food, setFood] = useState(getRandomCoordinates());
  const [direction, setDirection] = useState({ top: 0, left: 1 });
  const [speed, setSpeed] = useState(500);

  const moveSnake = () => {
    const newSnake = [...snake];
    const snakeHead = newSnake[newSnake.length - 1];
    const newSnakeHead = {
      top: snakeHead.top + direction.top,
      left: snakeHead.left + direction.left,
    };
    newSnake.push(newSnakeHead);
    newSnake.shift();
    setSnake(newSnake);
  };

  const onKeyDown = (e) => {
    const event = e || window.event;
    const snakeLength = snake.length - 1;
    if ([37, 38, 39, 40].includes(event.keyCode)) event.preventDefault();
    switch (event.keyCode) {
      case 37:
        if (snake[snakeLength].left - snake[snakeLength - 1].left === 1) break;
        setDirection({ top: 0, left: -1 });
        break;
      case 38:
        if (snake[snakeLength].top - snake[snakeLength - 1].top === 1) break;
        setDirection({ top: -1, left: 0 });
        break;
      case 39:
        if (snake[snakeLength].left - snake[snakeLength - 1].left === -1) break;
        setDirection({ top: 0, left: 1 });
        break;
      case 40:
        if (snake[snakeLength].top - snake[snakeLength - 1].top === -1) break;
        setDirection({ top: 1, left: 0 });
        break;
      default:
        break;
    }
  };

  useInterval(moveSnake, speed / config.speed);

  const increaseSpeed = () => {
    if (speed > 10) setSpeed(speed - 10);
  };

  const enlargeSnake = () => {
    const newSnake = [...snake];
    newSnake.unshift({
      top: snake[0].top,
      left: snake[0].left,
    });
    setSnake(newSnake);
  };

  const checkIfFoodEaten = () => {
    const head = snake[snake.length - 1];
    if (head.top === food.top && head.left === food.left) {
      onScoreChanged(score + (100 * config.multiplier));
      setFood(getRandomCoordinates());
      enlargeSnake();
      increaseSpeed();
    }
  };

  const checkIfOutOfBorders = () => {
    const head = snake[snake.length - 1];
    if (head.left >= 100 / STEP
      || head.top >= 100 / STEP
      || head.left < 0
      || head.top < 0) onGameOver();
  };

  const checkIfCollapsed = () => {
    const dots = [...snake];
    const head = dots[dots.length - 1];
    dots.pop();
    dots.forEach((dot) => {
      if (head.top === dot.top && head.left === dot.left) onGameOver();
    });
  };

  useEffect(() => {
    document.onkeydown = onKeyDown;
    checkIfFoodEaten();
    checkIfOutOfBorders();
    checkIfCollapsed();
    return function cleanup() {
      document.onkeydown = null;
    };
  });

  return (
    <>
      {snake
        .map((x) => (
          <Dot
            key={generateId()}
            top={STEP * x.top}
            left={STEP * x.left}
          />
        ))}
      <Food top={STEP * food.top} left={STEP * food.left} />
    </>
  );
}

Snake.propTypes = {
  config: PropTypes.shape({
    speed: PropTypes.number.isRequired,
    multiplier: PropTypes.number.isRequired,
  }).isRequired,
  onGameOver: PropTypes.func.isRequired,
  onScoreChanged: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
};

export default Snake;
