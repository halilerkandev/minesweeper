export const generateMines = mineNumber => {
  const mineList = [];
  while (mineList.length < mineNumber) {
    const rndNumber = Math.floor(Math.random() * mineNumber * mineNumber);
    if (!mineList.includes(rndNumber)) {
      mineList.push(rndNumber);
    }
  }
  return mineList;
};

export const generateCells = mineNumber => {
  const mineList = generateMines(mineNumber);
  return [...Array(mineNumber * mineNumber).keys()].reduce(
    (previousValue, currentValue, currentIndex) => {
      previousValue.push({
        id: currentIndex + 1,
        isMined: mineList.includes(currentValue),
        isOpened: false
      });
      return previousValue;
    },
    []
  );
};
