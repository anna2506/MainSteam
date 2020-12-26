function calculateLevel(experience) {
  let formulaValue = 1000;
  let level = 1;
  while (experience > formulaValue) {
    formulaValue += 1000 + 100 * level;
    level += 1;
  }
  return level;
}

export default calculateLevel;
