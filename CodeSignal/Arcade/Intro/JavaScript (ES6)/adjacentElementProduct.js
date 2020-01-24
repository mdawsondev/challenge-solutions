const adjacentElementsProduct = (input) => {
  return input.reduce((curMax, curNum, i) => {
    const nextNum = input[i+1] || null;
    const nextProd = nextNum ? curNum * nextNum : curMax;
    return Math.max(curMax, nextProd);
  }, -Infinity);
};